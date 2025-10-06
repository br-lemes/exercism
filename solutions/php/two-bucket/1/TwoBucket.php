<?php
declare(strict_types=1);

class TwoBucket
{
    function solve(
        int $sizeBucketOne,
        int $sizeBucketTwo,
        int $goal,
        string $startBucket,
    ): object {
        if ($goal > max($sizeBucketOne, $sizeBucketTwo)) {
            throw new Exception('Goal is larger than both buckets');
        }

        if ($goal % $this->gcd($sizeBucketOne, $sizeBucketTwo) !== 0) {
            throw new Exception(
                'No solution exists for the given bucket sizes and goal',
            );
        }

        $start =
            $startBucket === 'one' ? [$sizeBucketOne, 0] : [0, $sizeBucketTwo];
        $visited = [];
        $queue = [];
        $steps = 1;

        $queue[] = [$start[0], $start[1], $steps];
        $visited[$start[0] . ',' . $start[1]] = true;

        while (!empty($queue)) {
            $current = array_shift($queue);
            $bucket1 = $current[0];
            $bucket2 = $current[1];
            $currentSteps = $current[2];

            if ($bucket1 === $goal || $bucket2 === $goal) {
                $result = new stdClass();
                $result->numberOfActions = $currentSteps;
                $result->nameOfBucketWithDesiredLiters =
                    $bucket1 === $goal ? 'one' : 'two';
                $result->litersLeftInOtherBucket =
                    $bucket1 === $goal ? $bucket2 : $bucket1;
                return $result;
            }

            $nextStates = [
                [0, $bucket2],
                [$bucket1, 0],
                [$sizeBucketOne, $bucket2],
                [$bucket1, $sizeBucketTwo],
                [
                    max(0, $bucket1 - ($sizeBucketTwo - $bucket2)),
                    min($sizeBucketTwo, $bucket2 + $bucket1),
                ],
                [
                    min($sizeBucketOne, $bucket1 + $bucket2),
                    max(0, $bucket2 - ($sizeBucketOne - $bucket1)),
                ],
            ];

            foreach ($nextStates as $next) {
                $nextBucket1 = $next[0];
                $nextBucket2 = $next[1];
                $stateKey = $nextBucket1 . ',' . $nextBucket2;

                if (!isset($visited[$stateKey])) {
                    $isInvalidState =
                        ($startBucket === 'one' &&
                            $nextBucket1 === 0 &&
                            $nextBucket2 === $sizeBucketTwo) ||
                        ($startBucket === 'two' &&
                            $nextBucket2 === 0 &&
                            $nextBucket1 === $sizeBucketOne);

                    if (!$isInvalidState) {
                        $visited[$stateKey] = true;
                        $queue[] = [
                            $nextBucket1,
                            $nextBucket2,
                            $currentSteps + 1,
                        ];
                    }
                }
            }
        }

        throw new Exception('No solution found');
    }

    private function gcd(int $a, int $b): int
    {
        while ($b !== 0) {
            $temp = $b;
            $b = $a % $b;
            $a = $temp;
        }
        return $a;
    }
}
