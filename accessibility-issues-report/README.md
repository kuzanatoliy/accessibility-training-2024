# Accessibility issues report

### Lighthouse

> The section contains issues from accessibility and seo sections of lighthouse report

#### Names and labels

<details>
  <summary>Image elements do not have [alt] attributes</summary>

Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute.

![Examples of incorrect img tags](assets/Screenshot_2024_05_16-1.png 'Incorrect img tags')

</details>

<details>
  <summary>Form elements do not have associated labels</summary>

Labels ensure that form controls are announced properly by assistive technologies, like screen readers.

![Examples of incorrect input label](assets/Screenshot_2024_05_16-2.png 'Incorrect input label')

</details>

<details>
  <summary>Links do not have a discernible name</summary>

Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users.

![Examples of incorrect discernible link name](assets/Screenshot_2024_05_16-3.png 'Incorrect discernible link name')

</details>

<details>
  <summary>Select elements do not have associated label elements.</summary>

Form elements without effective labels can create frustrating experiences for screen reader users.

</details>

#### Contrast

<details>
  <summary>Background and foreground colors do not have a sufficient contrast ratio.</summary>

Low-contrast text is difficult or impossible for many users to read.

![Examples of incorrect contrast 1](assets/Screenshot_2024_05_16-4.png 'Incorrect discernible contrast 1')

![Examples of incorrect contrast 2](assets/Screenshot_2024_05_16-5.png 'Incorrect contrast 2')

</details>

#### International & Localization

<details>
  <summary>html element does not have a [lang] attribute</summary>

If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly.

</details>

#### Mobile friendly

<details>
  <summary>Does not have a meta viewport tag with width or initial-scaleNo</summary>

Meta view port does not only optimizes your app for mobile screen sizes, but also prevents a 300 millisecond delay to user input. Learn more about using the viewport meta tag.

</details>

<details>
  <summary>Document doesn't use legible font sizes</summary>

Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px.

</details>

<details>
  <summary>Tap targets are not sized appropriately</summary>

Interactive elements like buttons and links should be large enough (48x48px), or have enough space around them, to be easy enough to tap without overlapping onto other elements.

</details>

#### Content and best practices

<details>
  <summary>Document does not have a meta description</summary>

Meta descriptions may be included in search results to concisely summarize page content.

</details>

<details>
  <summary>Image elements do not have [alt] attributes</summary>

Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute.

![Examples of incorrect img tags](assets/Screenshot_2024_05_16-1.png 'Incorrect img tags')

</details>

#### Crawling and Indexing

<details>
  <summary>Links are not crawlable</summary>

Search engines may use href attributes on links to crawl websites. Ensure that the href attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered.

</details>
