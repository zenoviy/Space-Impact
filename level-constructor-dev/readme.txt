================== block settings Add field to object
panelFormPartGenerator	- main function to display sidepanel with customize fields

currentDescriptionId	- unique id based on  new Date().getTime()
innerText  - [string] contain description of the fields and input area
	 <input type='number' min="1" max="200" id=${'width-property-'+ currentDescriptionId} value=${(target.width)? target.width : 0} />
		id - unique id of input area to set and take data

	<button data-target='save-width-btn' class="main-btn">Save width</button>
		data-target -  unique button name to build events

elementCreator - function to create new html element
itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'description-requireText-'+ currentDescriptionId
            })
            fileContainer.appendChild(itemData);  // display custom field inside element





======================   set dialog 
defaultRequestDialogId	- fire when require object is set
defaultSuccessDialogId	- id of dialog fire when task was completed


each dialog has own unique id
each dialog has question buttons 
	- each button must have target id  (id of target dialog)
	- dialog has field   give_object/none    
		- if give_object then character give to you a contain object
		- if there is require you need set a number of require items in nearest field 
		Number of require objects to activate dialog 




		 