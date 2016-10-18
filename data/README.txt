tags.js       : the tags for the autocomplete. Instructions in file
messages.js   : the items at the bottom of the page. Surround each one with curly braces, and seperate with a comma. Put double quotes around every key.
                i.e.  {                                           curly brace to open
                        "icon": "~",                              icon in quotes, a colon then the icon in double quotes: "~" = heart, "!" = alarm, "+" = thumbs up. comma unless last.
                        "title": "AJAXed baby",                   title in quotes, a colon then the title for the item. comma unless last.
                        "body": "this text is in a data file",    body in quotes, a colon then the message. comma unless last.
                        "pill": "Nice!"                           the words in the coloured label/pill. [optional.]
                      },                                          curly brace to close. comma, unless this is the last item/message.

                ]}                                                don't put anything outside these!
                                                                  if you see 'undefined {"messages": [ ...' instead of the lovely formatted stuff when you open the page,
                                                                    you've made a mistake. make sure everything's in double quotes as above, commas are where they should
                                                                    be, and all the punctuation is correct. The format is JSON, any other problems --> Google them!
links.js      : similar to messages.js.

You can edit all these files with notepad or similar.