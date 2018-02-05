module.exports = function lakan(dispatch) {

    let cid,
        model,
        name,
        location,
        zone;
	
const xB = -79374, //Kaithan - The king of Crabs//
	  yB = 22345,
	  zB = 2056,
	  xA = -91254, //Most secure place in CU//
	  yA = 2095,
	  zA = 1680;
	  xC = -75992; //Most popular choke point in CU//
	  yC = 18936;
	  zC = 525;
	  xD = -98605;	//Drakhan – The Tyrant of Gidd Mountain//
	  yD = 21936;
	  zD = 3438;
	  xE = -91795;	//Lavathus – The Lord of the Lake//
	  yE = -30176;
	  zE = 51;
	  

    dispatch.hook('S_LOGIN', 1, (event) => {
        ({
            cid,
            model,
            name
        } = event);
    });

    dispatch.hook('S_LOAD_TOPO', 1, (event) => {
        zone = event.zone;
    });


    dispatch.hook('S_SPAWN_ME', 1, (event) => {});

    dispatch.hook('C_PLAYER_LOCATION', 1, (event) => {
        location = event;
    });

    dispatch.hook('C_CHAT', 1, (event) => {
        if (event.message.includes('!ss1')) {
		dispatch.toClient('S_SPAWN_ME', 1, {
                        target: cid,
                        x: xB,
                        y: yB,
                        z: zB,
                        alive: 1,
                        unk: 0
                    });

            return false;
        }
	else if (event.message.includes('!ss2')) {
		dispatch.toClient('S_SPAWN_ME', 1, {
                        target: cid,
                        x: xA,
                        y: yA,
                        z: zA,
                        alive: 1,
                        unk: 0
                    });
	
            return false;
	}
	else if (event.message.includes('!ka')) {
		dispatch.toClient('S_SPAWN_ME', 1, {
                        target: cid,
                        x: xC,
                        y: yC,
                        z: zC,
                        alive: 1,
                        unk: 0
                    });
	
            return false;
	}
	else if (event.message.includes('!drak')) {
		dispatch.toClient('S_SPAWN_ME', 1, {
                        target: cid,
                        x: xD,
                        y: yD,
                        z: zD,
                        alive: 1,
                        unk: 0
                    });
	
            return false;
	}
	else if (event.message.includes('!lava')) {
		dispatch.toClient('S_SPAWN_ME', 1, {
                        target: cid,
                        x: xE,
                        y: yE,
                        z: zE,
                        alive: 1,
                        unk: 0
                    });
	
            return false;
	}else if (event.message.includes('!ba')) {
		dispatch.toClient('S_INSTANT_MOVE', 1, {
                        target: cid,
                        x: xF,
                        y: yF,
                        z: zF,
                        alive: 1,
                        unk: 0
                    });
	
            return false;
	}
	else if (event.message.includes('!bb')) {
		dispatch.toClient('S_INSTANT_MOVE1', 1, {
                        target: cid,
                        x: xG,
                        y: yG,
                        z: zG,
                        alive: 1,
                        unk: 0
                    });
	
            return false;
	}
    });

};
