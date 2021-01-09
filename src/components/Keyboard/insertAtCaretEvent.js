// function insertAtCaret @Collin Anderson

export function insertAtCaretEvent(element, text) {
  if (document.selection) {
    element.focus();
    let sel = document.selection.createRange();
    sel.text = text;
    element.focus();
  } else if (element.selectionStart || element.selectionStart === 0) {
    let startPos = element.selectionStart;
    let endPos = element.selectionEnd;
    element.value = element.value.substring(0, startPos) + text + element.value.substring(endPos, element.value.length);
    element.focus();
    element.selectionStart = startPos + text.length;
    element.selectionEnd = startPos + text.length;
  } else {
    element.value += text;
    element.focus();
  }
}
