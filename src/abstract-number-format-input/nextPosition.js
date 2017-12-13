export default function nextPosition({start, end}, value, nextValue) {
  // FIXME:
  // An issue arises when nextValue is null (or blank once formatted),
  // where a 0 can be inserted, resulting in the caret going to before
  // the 0. This isn't the correct place to fix it, however too much time
  // has been spent tracing the issue, so just patch it here instead.
  // -1 means move the caret to the end of the contents.
  if (nextValue === "") return -1;
  const expectedShrinkage = end - start;
  const actualShrinkage = value.length - nextValue.length;
  return Math.max(0, start + (expectedShrinkage - actualShrinkage));
}
