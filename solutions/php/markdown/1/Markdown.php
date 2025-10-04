<?php
declare(strict_types=1);

function parseMarkdown(string $markdown): string
{
    $lines = explode("\n", $markdown);
    $isInList = false;
    $result = [];

    foreach ($lines as $line) {
        $line = parseHeaders($line);
        $line = parseListItems($line, $isInList);
        $line = wrapInParagraphIfNeeded($line);
        $line = parseInlineFormatting($line);

        $result[] = $line;
    }

    $html = implode('', $result);

    if ($isInList) {
        $html .= '</ul>';
    }

    return $html;
}

function parseHeaders(string $line): string
{
    if (preg_match('/^(#{1,6})\s*(.*)/', $line, $matches)) {
        $level = strlen($matches[1]);
        $content = trim($matches[2]);
        return "<h{$level}>{$content}</h{$level}>";
    }
    return $line;
}

function parseListItems(string $line, bool &$isInList): string
{
    if (preg_match('/^\*\s*(.*)/', $line, $matches)) {
        $content = trim($matches[1]);
        $hasFormatting =
            strpos($content, '__') !== false || strpos($content, '_') !== false;

        $formattedContent = $hasFormatting ? $content : "<p>{$content}</p>";

        if (!$isInList) {
            $isInList = true;
            return "<ul><li>{$formattedContent}</li>";
        }

        return "<li>{$formattedContent}</li>";
    }

    if ($isInList) {
        $isInList = false;
        return '</ul>' . $line;
    }

    return $line;
}

function formatInlineElements(string $text): string
{
    $text = preg_replace('/__(.*?)__/s', '<em>$1</em>', $text);
    $text = preg_replace('/_(.*?)_/s', '<i>$1</i>', $text);
    return $text;
}

function parseInlineFormatting(string $line): string
{
    if (preg_match('/^<[hul]|^<li|^<p>/i', $line)) {
        return preg_replace_callback(
            '/(>)([^<]+)(<\/)/',
            function ($matches) {
                return $matches[1] .
                    formatInlineElements($matches[2]) .
                    $matches[3];
            },
            $line,
        );
    }
    return formatInlineElements($line);
}

function wrapInParagraphIfNeeded(string $line): string
{
    if (!preg_match('/^<[hul]|^<p|^<li/i', $line)) {
        return "<p>{$line}</p>";
    }
    return $line;
}
