import { Link } from "react-router-dom";
export default function InventoryPage(){
    const token = localStorage.getItem('token');
    if (token === "undefined"){
      localStorage.removeItem("token");
    }
    
    if (!token){
        return(
            <h1>You are currently not logged in.. log in to view.. </h1>
            )
    }
    else {
        return (
            <div className="UsersinventoryJsx" style={{width: '100%', height: '100%', position: 'relative', background: '#BEB378'}}>
        <div className="FooterGroup" style={{width: 1512, height: 68, left: 0, top: 914, position: 'absolute'}}>
            <div className="FooterDiv" style={{width: 1512, height: 65, left: 0, top: 0, position: 'absolute', background: '#E0C223'}} />
            <div className="Footer" style={{left: 36, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>FOOTER</div>
            <div className="2023KodacDevelopementAllRightsReserved" style={{left: 639, top: 53, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>© 2023 Kodac Developement All Rights Reserved.</div>
        </div>
        <div className="ShibaInventoryScroll" style={{width: 1512, height: 233, left: 0, top: 375, position: 'absolute'}}>
            <div className="ShibaInventoryHolderDiv" style={{width: 1512, height: 233, left: 0, top: 0, position: 'absolute', background: '#D2DBA0', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '0.50px black solid'}} />
            <div className="ShibaGroup1" style={{width: 188, height: 179, left: 126, top: 33, position: 'absolute'}}>
                <div className="ShibaPictureButton" style={{width: 188, height: 166, left: 0, top: 0, position: 'absolute', background: '#B2A77D', borderRadius: 9999}} />
                <div className="Name" style={{width: 184, height: 26, left: 2, top: 153, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Kiwi Maru', fontWeight: '500', wordWrap: 'break-word'}}>name</div>
            </div>
            <div className="ShibaGroup2" style={{width: 188, height: 179, left: 394, top: 33, position: 'absolute'}}>
                <div className="ShibaPictureButton2" style={{width: 188, height: 166, left: 0, top: 0, position: 'absolute', background: '#B2A77D', borderRadius: 9999}} />
                <div className="Name" style={{width: 184, height: 26, left: 2, top: 153, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Kiwi Maru', fontWeight: '500', wordWrap: 'break-word'}}>name</div>
            </div>
            <div className="ShibaGroup3" style={{width: 193, height: 179, left: 662, top: 33, position: 'absolute'}}>
                <div className="ShibaPictureButton4" style={{width: 188, height: 166, left: 0, top: 0, position: 'absolute', background: '#B2A77D', borderRadius: 9999}} />
                <div className="Name" style={{width: 184, height: 26, left: 9, top: 153, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Kiwi Maru', fontWeight: '500', wordWrap: 'break-word'}}>name</div>
            </div>
            <div className="ShibaGroup4" style={{width: 188, height: 179, left: 935, top: 33, position: 'absolute'}}>
                <div className="ShibaPictureButton5" style={{width: 188, height: 166, left: 0, top: 0, position: 'absolute', background: '#B2A77D', borderRadius: 9999}} />
                <div className="Name" style={{width: 184, height: 26, left: 2, top: 153, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Kiwi Maru', fontWeight: '500', wordWrap: 'break-word'}}>name</div>
            </div>
            <div className="ShibaGroup5" style={{width: 188, height: 179, left: 1203, top: 33, position: 'absolute'}}>
                <div className="ShibaPictureButton5" style={{width: 188, height: 166, left: 0, top: 0, position: 'absolute', background: '#B2A77D', borderRadius: 9999}} />
                <div className="Name" style={{width: 184, height: 26, left: 2, top: 153, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Kiwi Maru', fontWeight: '500', wordWrap: 'break-word'}}>name</div>
            </div>
        </div>
        <div className="HeaderDivGroup" style={{width: 1367, height: 236, left: 68, top: 48, position: 'absolute'}}>
            <div className="HeaderDiv" style={{width: 1367, height: 236, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 42}} />
            <div className="YourInventory" style={{width: 1274, height: 145, left: 51, top: 47, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 64, fontFamily: 'Kiwi Maru', fontWeight: '500', wordWrap: 'break-word'}}>Your Inventory</div>
        </div>
        <div className="CreateAShibeGroup" style={{width: 585, height: 108, left: 463, top: 707, position: 'absolute'}}>
            <div className="CreateAShibeOuterDiv" style={{width: 585, height: 108, left: 0, top: 0, position: 'absolute', background: '#FFD78D', borderRadius: 17}} />
            <div className="CreateAShibeInnerDiv" style={{width: 564, height: 92, left: 11, top: 8, position: 'absolute', background: '#D2DBA0', borderRadius: 83}} />
        <Link to={"/shibacreation"}>
            <div className="CreateYourNextShibu" style={{width: 444, height: 56, left: 71, top: 36, position: 'absolute', textAlign: 'center', color: '#3D70BD', fontSize: 40, fontFamily: 'Tajawal', fontWeight: '900', wordWrap: 'break-word'}}><button>Create your next shibu</button></div>
            </Link>
        </div>
        <div className="UserInventoryHeaderGroup" style={{width: 326, height: 74, left: 1145, top: 21, position: 'absolute'}}>
            <div className="BackToInventoryDiv" style={{width: 326, height: 74, left: 0, top: 0, position: 'absolute', background: '#D2DBA0', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 70}} />
            <div className="Logout" style={{width: 275.34, height: 37.84, left: 50.33, top: 18.50, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Kiwi Maru', fontWeight: '500', wordWrap: 'break-word'}}>Logout<br/></div>
        </div>
        </div>
        )
        }
    }