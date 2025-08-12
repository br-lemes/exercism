pub fn LinkedList(comptime T: type) type {
    return struct {
        pub const Node = struct {
            prev: ?*Node = null,
            next: ?*Node = null,
            data: T,
        };

        first: ?*Node = null,
        last: ?*Node = null,
        len: usize = 0,

        pub fn push(self: *@This(), node: *Node) void {
            node.prev = self.last;
            node.next = null;

            if (self.last) |last| {
                last.next = node;
            } else {
                self.first = node;
            }

            self.last = node;
            self.len += 1;
        }

        pub fn pop(self: *@This()) ?*Node {
            if (self.last) |last| {
                if (last.prev) |prev| {
                    prev.next = null;
                    self.last = prev;
                } else {
                    self.first = null;
                    self.last = null;
                }

                last.prev = null;
                last.next = null;
                self.len -= 1;

                return last;
            }
            return null;
        }

        pub fn shift(self: *@This()) ?*Node {
            if (self.first) |first| {
                if (first.next) |next| {
                    next.prev = null;
                    self.first = next;
                } else {
                    self.first = null;
                    self.last = null;
                }

                first.prev = null;
                first.next = null;
                self.len -= 1;

                return first;
            }
            return null;
        }

        pub fn unshift(self: *@This(), node: *Node) void {
            node.prev = null;
            node.next = self.first;

            if (self.first) |first| {
                first.prev = node;
            } else {
                self.last = node;
            }

            self.first = node;
            self.len += 1;
        }

        pub fn delete(self: *@This(), node: *Node) void {
            var current = self.first;
            var found = false;

            while (current) |curr| {
                if (curr == node) {
                    found = true;
                    break;
                }
                current = curr.next;
            }

            if (!found) {
                return;
            }

            if (node.prev) |prev| {
                prev.next = node.next;
            } else {
                self.first = node.next;
            }

            if (node.next) |next| {
                next.prev = node.prev;
            } else {
                self.last = node.prev;
            }

            node.prev = null;
            node.next = null;
            self.len -= 1;
        }
    };
}
