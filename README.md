# VCB
## Project use gruntjs
required npm version > 7
pull code from git
>npm install

run grunt with terminal and command is 
>grunt

## Some tab does not show in main content. 
- open sign-in >> vào index.html adding ```style="display: none;"``` vào line 79, 145,146 và remove ```style="display: none;"``` lime 144
acc = a@a.a 
pass = a
- open register >> vào index.html adding ```style="display: none;"``` vào line 79, 144,146 và remove ```style="display: none;"``` lime 145
acc = a@a.a 
pass = a
- open reset >> vào index.html adding ```style="display: none;"``` vào line 79, 144,145 và remove ```style="display: none;"``` lime 146
acc = a@a.a 

## Some mistake in design
- My campaigns > desktop không có 2 step click button "continue" và "create new campaigns" như mobile nên hiện tại để đồng bộ.
- Model popup Edit Campaign in My campaigns ở desktop về mobile lại là next page. vậy để nguyên là model popup 
- Model popup Start Copying ở desktop về mobile lại là next page. vậy để nguyên là model popup 
- Không có tab history của campaign detail(Strategies)

- 1 vài text về mobile bị cắt (sẽ để nguyên như desktop không cắt text ) Ex: 
Knowledge Base (Partnership), Document Type (Setting verify ), create new account (My account : description of STANDARD)...
- missing tab notification of setting mobile tuy nhiên đã làm xong dựa trên tổng thể cả site 