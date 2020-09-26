# VCB
## Project use gruntjs
required npm version > 7
pull code from git
>npm install

run grunt with terminal and command is 
>grunt

## Some tab does not show in main content. 
- open sign-in >> open file index.html adding ```style="display: none;"``` to lines 79, 145,146 and remove ```style="display: none;"``` line 144
acc = a@a.a 
pass = a
- open register >> open file index.html adding ```style="display: none;"``` to lines 79, 144,146 and remove ```style="display: none;"``` line 145
acc = a@a.a 
pass = a
- open reset >> open file index.html adding ```style="display: none;"``` to lines 79, 144,145 and remove ```style="display: none;"``` line 146
acc = a@a.a 
- open email template: open file index.html adding ```style="display: none;"``` to lines 26, 78, 153 and remove ```style="display: none;"``` line 173

## Some mistake in design
- My campaigns desktop version does not have 2 steps click button "continue" and "create new campaign" like mobile. so now, I make it sync (My campaigns > desktop không có 2 step click button "continue" và "create new campaigns" như mobile nên hiện tại để đồng bộ.)
- Model popup Edit Campaign in My campaigns in desktop version and in mobile version it is next page type so i make it is model popup (Model popup Edit Campaign in My campaigns ở desktop về mobile lại là next page. vậy để nguyên là model popup)
- Model popup Start Copying in desktop version and in mobile version it is next page type so i make it is model popup (Model popup Start Copying ở desktop về mobile lại là next page. vậy để nguyên là model popup)
- Does not have tab history of campaign detail (trategies page)(Không có tab history của campaign detail(Strategies))

- Some text have been cut off in mobile in make to stay intact like desktop (1 vài text về mobile bị cắt (sẽ để nguyên như desktop không cắt text )) Ex: 
Knowledge Base (Partnership), Document Type (Setting verify ), create new account (My account : description of STANDARD)...
- missing tab notification of setting mobile. however I have done this based on the site as a whole. (thiếu tab notification ở page settings mobile design) tuy nhiên đã làm xong dựa trên tổng thể cả site 

## note for branch split files not use javascript to make it like single page web app
- Can not use index. Index and my account is same.
- Each section is one file html.