The problem
Imagine you were implementing a page with a two-column layout: a
sidebar on the left and the "main" part on the right. The left sidebar
needs to be collapsible: it should have a button, a click on which will
collapse the sidebar into the "narrow" view or expand it back to the
"wide" view. As a result, the main part can also become bigger or
smaller. And somewhere at the bottom of that main part, you have a
block where you want to show something in three columns when the
sidebar is collapsed or in two columns when it's expanded. Maybe an
image gallery or some advertisement blocks.

Context consumers will re-render when the value on the
Provider changes

All of them will re-render, even if they don't use the part of the
value that actually changed.

Those re-renders can't be prevented with memoization (easily).
