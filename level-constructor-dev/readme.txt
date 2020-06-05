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
		 