pub fn reply(message: &str) -> &str {
    let trimmed = message.trim();
    if trimmed.is_empty() {
        return "Fine. Be that way!";
    }
    let has_lower = trimmed.chars().any(|c| c.is_lowercase());
    let has_upper = trimmed.chars().any(|c| c.is_uppercase());
    if !has_lower && has_upper {
        if trimmed.ends_with('?') {
            return "Calm down, I know what I'm doing!";
        }
        return "Whoa, chill out!";
    }
    if trimmed.ends_with('?') {
        return "Sure.";
    }
    "Whatever."
}
