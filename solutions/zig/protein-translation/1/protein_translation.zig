const std = @import("std");
const mem = std.mem;

pub const TranslationError = error{
    InvalidCodon,
};

pub const Protein = enum {
    methionine,
    phenylalanine,
    leucine,
    serine,
    tyrosine,
    cysteine,
    tryptophan,
};

fn translateCodon(codon: []const u8) !?Protein {
    if (mem.eql(u8, codon, "AUG")) return .methionine;
    if (mem.eql(u8, codon, "UUU") or mem.eql(u8, codon, "UUC")) return .phenylalanine;
    if (mem.eql(u8, codon, "UUA") or mem.eql(u8, codon, "UUG")) return .leucine;
    if (mem.eql(u8, codon, "UCU") or mem.eql(u8, codon, "UCC") or
        mem.eql(u8, codon, "UCA") or mem.eql(u8, codon, "UCG")) return .serine;
    if (mem.eql(u8, codon, "UAU") or mem.eql(u8, codon, "UAC")) return .tyrosine;
    if (mem.eql(u8, codon, "UGU") or mem.eql(u8, codon, "UGC")) return .cysteine;
    if (mem.eql(u8, codon, "UGG")) return .tryptophan;
    if (mem.eql(u8, codon, "UAA") or mem.eql(u8, codon, "UAG") or
        mem.eql(u8, codon, "UGA")) return null; // STOP
    return TranslationError.InvalidCodon;
}

pub fn proteins(allocator: mem.Allocator, rna: []const u8) ![]Protein {
    var result = std.ArrayListUnmanaged(Protein){};
    errdefer result.deinit(allocator);

    var i: usize = 0;
    var stopped = false;
    while (i + 3 <= rna.len) {
        const codon = rna[i .. i + 3];
        i += 3;
        const protein = try translateCodon(codon);
        if (protein == null) {
            stopped = true;
            break;
        }
        try result.append(allocator, protein.?);
    }

    if (!stopped and i < rna.len) {
        return TranslationError.InvalidCodon;
    }

    return result.toOwnedSlice(allocator);
}
