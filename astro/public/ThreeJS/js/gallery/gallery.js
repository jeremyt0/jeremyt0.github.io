

const addRooms = () => {

    // Main room (Centre)
    let newRoomDimensions = [19,8,20];
    mainRoom = new Room(newRoomDimensions,[0,0,0]);
    mainRoom.createWalls('block',true,'door','door');
    mainRoom.renderWalls();
    mainRoom.createFloors(true,true);
    mainRoom.renderFloors();
    mainRoom.addLights();

    // Viewing room (North)
    newRoomDimensions = [mainRoom.dimensions.width,mainRoom.dimensions.height,10];
    northRoomCenterPoint = [0,0,newRoomDimensions[2]/2+(mainRoom.dimensions.length/2)];
    viewingRoom = new Room(newRoomDimensions, northRoomCenterPoint);
    viewingRoom.createWalls(true, false, true, true);
    viewingRoom.renderWalls();
    viewingRoom.createFloors();
    viewingRoom.renderFloors();
    // viewingRoom.addLights();

    // Gallery room (East)
    newRoomDimensions = [20 ,mainRoom.dimensions.height,mainRoom.dimensions.length];
    eastRoomCenterPoint = [-((newRoomDimensions[0]/2)+(mainRoom.dimensions.width/2)),0,0];
    galleryRoom = new Room(newRoomDimensions, eastRoomCenterPoint);
    galleryRoom.createWalls(true, true, 'door', true);
    galleryRoom.renderWalls();
    galleryRoom.createFloors();
    galleryRoom.renderFloors();
    galleryRoom.addLights();
    
    // Gallery room (West)
    newRoomDimensions = [20 ,mainRoom.dimensions.height,mainRoom.dimensions.length];
    westRoomCenterPoint = [((newRoomDimensions[0]/2)+(mainRoom.dimensions.width/2)),0,0];
    galleryRoom2 = new Room(newRoomDimensions, westRoomCenterPoint);
    galleryRoom2.createWalls(true, true, true, 'door');
    galleryRoom2.renderWalls();
    galleryRoom2.createFloors();
    galleryRoom2.renderFloors();
    galleryRoom2.addLights();
    
    return true;
}


const addPaintings = () => {

    // Main room
    let viewingRoomSign = createPlacard('<- Viewing Room ->')
    mainRoom.addToNorthWall( viewingRoomSign );
    
    let placard_credits1 = createPlacard('Art Gallery')
    let placard_credits2 = createPlacard('by Jeremy Tang')
    let placard_credits3 = createPlacard('jeremyt0.github.io')
    mainRoom.addToSouthWall( placard_credits1 );
    mainRoom.addToSouthWall( placard_credits2 );
    mainRoom.addToSouthWall( placard_credits3 );
    
    // Viewing room
    let film = createMovie( 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' );
    viewingRoom.addToNorthWall( film );
    
    
    // Viewing room East

    let painting_hedgehog = createPainting( 'https://i.imgur.com/uyz7ghO.jpg' );
    galleryRoom.addToNorthWall( painting_hedgehog );
    let painting_hedgehog2 = createPainting( 'https://i.imgur.com/KEx9hVt.jpg' );
    galleryRoom.addToNorthWall( painting_hedgehog2 );
    let painting_hedgehog3 = createPainting( 'https://i.imgur.com/b5f3bJW.jpg' );
    galleryRoom.addToNorthWall( painting_hedgehog3 );
    let painting_hedgehog4 = createPainting( 'https://i.imgur.com/5dPiHsT.jpg' );
    galleryRoom.addToNorthWall( painting_hedgehog4 );
    let painting_hedgehog5 = createPainting( 'https://i.imgur.com/p9vW3mn.jpg' );
    galleryRoom.addToNorthWall( painting_hedgehog5 );

    let painting_dog = createPainting( 'https://i.imgur.com/hsEAuGt.jpeg' );
    galleryRoom.addToEastWall( painting_dog );
    let painting_doggy = createPainting( 'https://i.imgur.com/pDLMRbi.png' );
    galleryRoom.addToEastWall( painting_doggy );
    let painting_shiba = createPainting( 'https://i.imgur.com/tcx2gav.jpeg' );
    galleryRoom.addToEastWall( painting_shiba );
    
    let painting_kitty_yawn = createPainting( 'https://i.imgur.com/tsrEJxY.jpeg' );
    galleryRoom.addToSouthWall( painting_kitty_yawn );
    let painting_black_kitty = createPainting( 'https://i.imgur.com/kHsm6cN.jpg' );
    galleryRoom.addToSouthWall( painting_black_kitty );
    
    // Viewing room West

    let painting_mars = createPainting( 'data:image/jpeg;base64,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' );
    let placard_mars = createPlacard('Photo of Mars');
    galleryRoom2.addToNorthWall( painting_mars, placard_mars );
    let painting_nasa = createPainting( 'data:image/png;base64,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' );
    let placard_nasa = createPlacard('NASA');
    galleryRoom2.addToNorthWall( painting_nasa, placard_nasa );
    let painting_perseverance = createPainting( 'data:image/jpeg;base64,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' );
    let placard_perseverance = createPlacard('Perseverance');
    galleryRoom2.addToNorthWall( painting_perseverance, placard_perseverance );
    
    let painting_shaundead = createPainting( 'https://cdn.vox-cdn.com/thumbor/Ze9nO8v-Yfsz3CYdarfmSU2GC2w=/0x0:1920x1080/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/51612151/shaun-dead.0.0.jpg' );
    let placard_shaundead = createPlacard("Shaun & Ed");
    galleryRoom2.addToWestWall( painting_shaundead, placard_shaundead );
    let painting_queens = createPainting( 'https://i.imgur.com/QtKHPvQ.jpg' );
    let placard_queens = createPlacard("Queen's Gambit");
    galleryRoom2.addToWestWall( painting_queens, placard_queens );
    
    let painting_cartoon = createPainting( 'https://i.imgur.com/LWJbB4F.png' );
    galleryRoom2.addToSouthWall( painting_cartoon );
    let painting_successkid = createPainting( 'https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg' );
    galleryRoom2.addToSouthWall( painting_successkid );
    let painting_sunset = createPainting( 'https://i.imgur.com/VkRzqYh.jpeg' );
    galleryRoom2.addToSouthWall( painting_sunset );

    // Rendering all rooms
    
    mainRoom.renderWallPieces();
    viewingRoom.renderWallPieces();
    galleryRoom.renderWallPieces();
    galleryRoom2.renderWallPieces();




}