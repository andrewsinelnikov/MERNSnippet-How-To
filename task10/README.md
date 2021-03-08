# ReactSnippet: How To
---

## Make a Contact FORM (HANDLING Events)
---
How make a contact form with a map? [Read the previous article](https://github.com/andrewsinelnikov/ReactSnippet-How-To/blob/main/task9/README.md)

### Description
Forms are usually assigned for data entry. Having received some information from the user, we want to use it. To do this, you need to add actions that will handle events made by the user or the browser.

**General way to add events to an element:**
> ````Javascript 
> <element onEvent={event_handler}>
> ````
where <br />
  `element` - React element, <br />
  `onEvent` - an attribute that describes the action took place,<br />
  `event_handler` - a function that handles user or browser action<br />
  
Some events <br />
| Event | Description |
|______|______________|
| onClick | the user clicks on an element |
| onChange | the content of a form element, or the state have changed |
| onSubmit | a form is submitted |

[List of HTML DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)


**You have a contact form! 🎉**

Source files 📁 [here](https://github.com/andrewsinelnikov/ReactSnippet-How-To/tree/main/task10/src)

#### Got a question ❓   [✉️](https://twitter.com/Andrew79361148)

Want to know more? 👉 [Read next](https://github.com/andrewsinelnikov/ReactSnippet-How-To/blob/main/README.md)
