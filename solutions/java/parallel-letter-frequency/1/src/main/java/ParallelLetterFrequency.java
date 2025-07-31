import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.*;
import java.util.function.Function;
import java.util.stream.Collectors;

class ParallelLetterFrequency {
    private final String[] texts;

    ParallelLetterFrequency(String[] texts) {
        this.texts = texts;
    }

    Map<Character, Integer> countLetters(){
        Map<Character, AtomicInteger> counts = new ConcurrentHashMap<>();
        ExecutorService executor = Executors.newFixedThreadPool(10);
        List<Callable<Void>> todos = new ArrayList<>();
        for (String t: texts) {
            todos.add(() -> {
                 for (int i=0;i<t.length();++i) {
                    Character c = t.charAt(i);
                    if(Character.isLetter(c)) {
                        c = Character.toLowerCase(c);
                        counts.compute(c, (k,v) -> {
                        if (v == null)
                            return new AtomicInteger(1);
                        v.incrementAndGet();
                        return v;
                    });
                    }
                }
                return null;
            });
        }
        try {
            executor.invokeAll(todos);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return counts.entrySet()
                .stream()
                .collect(
                        Collectors.toMap(
                            Map.Entry::getKey,
                            (e)-> e.getValue().get()
        ));
    }
}
