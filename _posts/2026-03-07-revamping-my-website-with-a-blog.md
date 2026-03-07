---
layout: post
title: "Revamping My Website: Adding a Blog Section"
date: 2026-03-07
categories: [personal, projects]
tags: [jekyll, github-pages, chirpy, web-development, personal]
excerpt: "How and why I decided to rebuild my personal website to include a blog — the tools I chose, the decisions I made, and what I learned along the way."
---

## Background

I had wanted to improve and refine my personal website. Time ticked by and our minutes, seconds consumed by life.

Recently I was talking to some friends and their stories of outreaching and sharing your thoughts are hugely beneficial to your personal development. I'll go deeper in another post.

I was inspired to start writing and posting my learnings and the best place is to have a collection or blog.

Thus, this refactor was born.

## Choosing the Stack

After thorough research by "Googling" the web and browsing examples, I settled on [Jekyll](https://jekyllrb.com/) with the [Chirpy theme](https://github.com/cotes2333/jekyll-theme-chirpy).

Before this, I used Astro to deploy a React webapp for customisability. I managed to set it up but didn't do much with it.

In most cases, the more simple, the better.

## The Revamp Process

Nowadays if you're not using "AI" to code, you're either: stubborn, want a challenge or just don't know what it is. 

I wanted to keep my legacy code in this repository so I didn't start fresh. I used Cursor to refactor the existing site to use Jekyll.

I spent a few hours reading the documentation for Github pages with [Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll) and [Chirpy](https://chirpy.cotes.page/posts/getting-started/) trying to get the gist of the process and identify any difficult hurdles.

### Reference material

Whenever I'm prompting, I include reference material so it knows what I want (roughly).

I cloned the [Chirpy starter repository](https://github.com/cotes2020/chirpy-starter) so I can use this as reference material.

Next, I add the chirpy-starter repository to my current Cursor workspace, so the files can be found for referencing.

Once all this is set up, I go chatting away to my personal (worker) assistant.

### Smooth Sailing (not)

It's not always as easy as prompting, walking away from the screen for a green tea and returning to the perfect solution.

My personal habit is to give small and simple tasks so I can track the changes made. After I am happy with a working version, I always follow up with a question to understand the files changed.

### Favicon

1. Asked GPT to generate a cartoon image of me.

2. Used an online tool to create favicons from the generated PNG.

3. Following the instructions in the docs, I simply copied my favicon image files, to a new path `/assets/img/*`.

To my surprise, it didn't work. :upside_down_face:


This was quite annoying to figure out.

Although mentioned in Step 2 of the Chirpy docs, it still took me some longer minutes (maybe 30) to update the favicon.

Logs from when I build:
```
    Conflict: The following destination is shared by multiple files.
            The written file may end up with unexpected contents.
            /jeremyt0.github.io/_site/assets/img/favicons/site.webmanifest
                - assets/img/favicons/site.webmanifest
                - /jeremyt0.github.io/assets/img/favicons/site.webmanifest
```

This conflict showed that the `site.webmanifest` had conflicting rules.

I tried to:

1. Delete the original
2. Build again - so that it will be forced to use the only existing favicons.

But the `/_site/*` files are built on "build".

#### Solution

Override it with a `_includes/favicons.html` :smile:.

### Ruby

Jekyll uses Ruby which I have never touched.

I came across the classic version incompatibility issues when building.

Did some classic googling and found `rbenv` which is the Ruby version of `pyenv` (I have extensive experience with the Python ecosystem).


## What's Next

Now, this is over (v1), I can focus on writing what's on my mind.

I do want to improve and customise the site but I've learned to let things be and deal with them if it's necessary.

Thanks for reading.

Signing off, Jeremy.
