return {
    transform = function(dataset)
        local output = {}
        for score, letters in pairs(dataset) do
            for _, letter in pairs(letters) do
                output[string.lower(letter)] = score
            end
        end
        return output
    end,
}
