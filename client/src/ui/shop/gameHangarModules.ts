import { createImage } from '../../view/displayModules';



function loadHangar({element, mainGameObject}){
    let hangarTextArea = document.querySelector("#hangar-text");
    let playerObject = mainGameObject.gameInitData.gameData.playerObject;
    let playerObjectData = playerObject.data
    let ctx = element.hangarShipArea.getContext('2d');
    let img = new Image()
    element.hangarShipArea.width = 600;
    element.hangarShipArea.height = 350;
    img.src = process.env.HOST + playerObjectData.hangarImage;
    hangarTextArea.innerHTML = `<p>${playerObjectData.name.split('_').join(' ')}</p>`;
    img.onload = () => {
        createImage(ctx, img, 80, 20, 500, 300)
        for(let i = 0; i < playerObjectData.firespot.length; i++){
            createClicableArea({position: playerObjectData.firespot[i], index: i, gun: playerObject.data.guns[i]})
        }
    }


    function createClicableArea({position, index, gun}){
        ctx.fillStyle = (mainGameObject.shopArea.selectedShopItem.hangarSelectedItem === index)? "rgba(255, 221, 0, .7)" :"rgba(234, 70, 72, .5)";
        ctx.fillRect(position.positionX, position.positionY, 60, 50);
        if(gun){
            let img = new Image()
            img.src = process.env.HOST + gun.loadImage
            img.onload = () => {
                createImage(ctx, img, position.positionX, position.positionY, 60, 50)
            }
        }
        mainGameObject.shopArea.selectedShopItem.hangarElements[index] = {
            object: gun,
            positionX: position.positionX,
            positionY: position.positionY,
            shipXPosition: 5,
            shipYPosition: 12,
            width: 60,
            height: 50
        }
    }
}



export {
    loadHangar,
}