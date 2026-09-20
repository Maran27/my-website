# Writing workflow

Writing is Markdown-backed. The source of truth for every piece lives in `src/content/writing/*.md`.

## Create a piece

Copy an existing Markdown file and update its frontmatter:

```yaml
---
order: 6
slug: my-new-article
title: 'My New Article'
date: '2026'
category: 'AI engineering'
status: 'Draft'
summary: 'A short description for the writing index and SEO.'
---
```

Use `Draft` while writing, `Idea` for an outline, and `Published` when the article is ready for the public site.

## Publish

There is intentionally no CMS publish button. Publishing is a content change in Git:

1. Edit the `.md` file.
2. Change `status: "Draft"` (or `Idea`) to `status: "Published"`.
3. Commit and push.
4. Let the normal site deployment build the new version.

Only published entries render their Markdown body publicly. Drafts and ideas show the working-state message instead.

## Navigation

Previous/Next links are generated automatically from the `order` field, so adding or reordering an article only requires changing frontmatter.
