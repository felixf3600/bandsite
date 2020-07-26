# BANDSITE PROJECT

## DESCRIPTION

### SPRINT-1

At this stage this is a basic information site consiting of 1 page.

### SPRINT-2

This is now a 2 page site. The biography(index) page now has a comments section. This section will display an initial set of comments and new comments can be added to it.

The show page will display a set list of shows.

## STRUCTURE

### COMMON STRUCTURES IN BOTH PAGES

#### NAVIGATION BAR

##### SPRINT-1

The navigation bar containing the logo, and 2 naivigation links. The logo and the Biography will link to this page. The shows link is currently not leading anywhere as this page is not done at this stage.

##### SPRINT-2

The links on the navigation are now working. The Biography tap will lead to the Biography(index)page, This is also true for the logo. The shows tab will link to the shows page. Fixed the bar so that its centered in tablet and desktop mode.

#### THE FOOTER

##### SPRINT-1

The footer displays the logo, social links, distributors and their contact as welll as the copyright. The email links work.

#### SPRINT-2

No changes needed in sprint 2

### BIOGRAPHY PAGE

#### HERO BANNER

##### SPRINT-1

This banner and title. The banner will grow according to the width of the site. The title will grow until it reaches tablet size. At this point the font size will remain the same

##### SPRINT-2

I have standardized the fonts so that the title wont grow anymore to comply more with the project requirements.

#### ABOUT

##### SPRINT-1

This section tells a little about the band. This container will stay centered and the same size once it reaches the desktop size.

##### SPRINT-2

No changes needed to this section.

#### THE GALLERY

##### SPRINT-1

this container will keep the same size once it reaches the desktop size. At that time it will stay centered.

##### SPRINT-2

All 3 dimensions now centered when they change size.

#### COMMENTS SECION

##### SPRINT-2

New to this sprint. This section displays a set of comments. This also accepts new comments. It will not accept comments if they have missed filled any input field. This will also display according to the newest comment first.

### SHOWS

#### HERO BANNER

##### SPRINT-2

New to this sprint. There is an iframe that will play "A Hard's Days Night" by the Beatles. Figured it was appropriate considering I was working on this project till midnight that night. LOL.

#### SHOWS SECTION

##### SPRINT-2

New to this sprint. This displays the shows that are given in an array.

## TECHNOLOGIES

### SPRINT-1

#### SOCIAL ICONS

This icons will link to their respective sites.

#### NAV LINKS

These links will point to their respective site. The shows link will not go anywhere as there is no page for it.

#### BEM

I used BEM in all variales, mixins and classes.

#### SASS

Used SASS to write CSS

#### FONTS

I got all compatiblity for the fonts. I used 2 font familes: roboto and avenirNextProLt. For thin I used the 300 size, for normal I used normal and for bold I used bold.

#### PHOTOS

I used the provided photos as well as I download 2 stock photos from unsplash.com. I wasnt sure on how licensing works so I have inclded the links from unsplash below:

<span>Photo by <a href="https://unsplash.com/@tajmiagianna?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tajmia Loiacono</a> on <a href="https://unsplash.com/s/photos/christian-band?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

<span>Photo by <a href="https://unsplash.com/@laok112?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Luthfi Ali Qodri</a> on <a href="https://unsplash.com/s/photos/christian-band?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

<span>Photo by <a href="https://unsplash.com/@adityachinchure?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Aditya Chinchure</a> on <a href="https://unsplash.com/s/photos/concert?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

#### MIXINS

Created mixins for fonts and display flex as well as media queries that is used a lot.

### SPRINT-2

#### IFRAME

Embeded an iframe to play music on the shows hero banner.

#### COMMENTS

Display and accept new comments. sorts them by date.

#### JAVASCRIPT

Used javascript to manipulate the DOM, grab info from a form, and sort arrays.

#### BEM

Reworked some of the BEM to work better with SASS and to be more informative.

#### SASS

Reworked the SASS to be more readable with BEM

## DIGGING DEEPER

### SPRINT-1

#### NAVIGATION EFFECTS

I have added some animation to the nav links. The links will change color while its hovering. Did not apply the background changes from the examples as I did not think it would look good. Used a media query to make sure you can hover for this to take effect.

#### GALLERY EFFECTS

I have grayed out the photos and it will show fulll colors on hover. I have also attached this to a media query so that it will only work on devices that can hover. Otherwise the photos will show in full color and these effects wont show.

#### MAILTO

I have incorporated mailto for the links. if clicked it will open your preffered email program with the link.

### SPRINT-2

#### DISPLAY COMMENT DATE

The date displays differently depending on how long a comment has been posted. less than 1 minute will display by seconds. less than 1 hour will display in minutes. less than 1 day will display in hours. anything more than a week will display in days. Anything else will display in this format DD/MM/YYYY.
