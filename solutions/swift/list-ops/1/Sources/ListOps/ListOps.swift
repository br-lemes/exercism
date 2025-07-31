struct ListOps {
    static func append<T>(_ initial: [T], _ list: [T]) -> [T] {
        return initial + list
    }

    static func concat<T>(_ args: [T]...) -> [T] {
        var result: [T] = []
        for arg in args {
            result = append(result, arg)
        }
        return result
    }

    static func filter<T>(_ list: [T], closure: ((T) -> Bool)) -> [T] {
        var result: [T] = []
        for each in list {
            if closure(each) {
                result = append(result, [each])
            }
        }
        return result
    }

    static func length<T>(_ list: [T]) -> Int {
        var counter = 0
        for _ in list {
            counter += 1
        }
        return counter
    }

    static func map<T>(_ list: [T], closure: ((T) -> T)) -> [T] {
        var result: [T] = []
        for each in list {
            result = append(result, [closure(each)])
        }
        return result
    }

    static func foldLeft<T>(_ list: [T], accumulated: T, combine: ((T, T) -> T)) -> T {
        var result = accumulated
        for each in list {
            result = combine(result, each)
        }
        return result
    }

    static func foldRight<T>(_ list: [T], accumulated: T, combine: ((T, T) -> T)) -> T {
        var result = accumulated
        var list = list
        for _ in list {
            result = combine(list.last!, result)
            list = list.dropLast()
        }
        return result
    }

    static func reverse<T>(_ list: [T]) -> [T] {
        var result: [T] = []
        var list = list
        for _ in list {
            result = append(result, [list.last!])
            list = list.dropLast()
        }
        return result
    }
}
