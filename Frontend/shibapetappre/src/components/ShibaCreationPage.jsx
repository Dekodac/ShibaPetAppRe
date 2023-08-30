import { Link } from "react-router-dom";
import { useContext } from "react";
import { LogoutContext } from "./LogoutContext";
import { useState } from "react";
import { DogFactContext } from "./DogFactContext";


export default function ShibaCreationPage(){
    const {dogFact} = useContext(DogFactContext)
    const {handleLogout} = useContext(LogoutContext)


    const [isCaneEquipped, setIsCaneEquipped] = useState(false);
    const [hasDramaticMustache, setHasDramaticMustache] = useState(false);
    const [isHairClipWorn, setIsHairClipWorn] = useState(false);
    const [isMuzzleWorn, setIsMuzzleWorn] = useState(false);
    const [areGlassesWorn, setAreGlassesWorn] = useState(false);
    const [isBowTieWorn, setIsBowTieWorn] = useState(false);
    const [isTopHatWorn, setIsTophatWorn] = useState(false);
    
    const [furColor, setFurColor] = useState('#000000'); // Default black color
    const [eyeColor, setEyeColor] = useState('#000000'); // Default black color
    const [name, setName] = useState(''); // Default empty name



    const token = localStorage.getItem('token');
  if (token === "undefined"){
    localStorage.removeItem("token");
  }

  function handleCreate(){
    alert("you created a shibe")
  }









    
    return(
        <div className="Shibacreationpage" style={{width: '100%', height: '100%', position: 'relative', background: '#BEB378'}}>
<div className="Dogfactgroup" style={{width: '100%', bottom: 58}}>
    <div className="Outerdogfactdiv" style={{width: 397, height: 241, left: 0, top: 372, position: 'absolute', background: '#EFC983', borderRadius: 39, borderColor: "black"}} />
    <div className="Innerdogfactdiv" style={{width: 344, height: 150, left: 25, top: 390, position: 'absolute', background: '#D2DBA0', borderRadius: 46, borderColor: "black", padding: '10px', overflow: 'hidden'}}>
  <p style={{margin: 0, fontSize: '16px', whiteSpace: 'normal', overflow: 'hidden', textOverflow: 'ellipsis', color: "black", fontFamily: "sans-serif"}}>
    Dog Fact Of The Day: {dogFact}
  </p>
</div>
</div>
    <div className="FooterGroup" style={{width: 1512, height: 68, left: 0, top: 914, position: 'absolute'}}>
        <div className="FooterDiv" style={{width: 1512, height: 65, left: 0, top: 0, position: 'absolute', background: '#E0C223'}} />
        <div className="Footer" style={{left: 36, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>FOOTER</div>
        <div className="2023KodacDevelopementAllRightsReserved" style={{left: 639, top: 53, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>© 2023 Kodac Developement All Rights Reserved.</div>
    </div>
    <div className="OwnedShibaPicture" style={{width: 392, height: 316, left: 556, top: 0, position: 'absolute', background: '#7E7158', boxShadow: '0px 15px 10px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
    <div style={{width: 70, height: 46, left: 721, top: 78, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 128, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>?</div>
    <div className="Group1" style={{width: 399, height: 88, left: 556, top: 711, position: 'absolute'}}>
        <div className="BackToInventoryDiv" style={{width: 399, height: 88, left: 0, top: 0, position: 'absolute', background: '#D2DBA0', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 70}} />
        <div className="Create" style={{width: 337, height: 45, left: 31, top: 15, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Kiwi Maru', fontWeight: '500', wordWrap: 'break-word'}} onClick={handleCreate}><button>CREATE</button></div>
    </div>
    <div className="ShibaAttributesGroup" style={{width: 743, height: 295, left: 410, top: 344, position: 'absolute'}}>
        <div className="OwnedShibaCardDetails" style={{width: 743, height: 295, left: 0, top: 0, position: 'absolute', background: '#D9D9D9'}} />
        <div className="CaneGroup" style={{width: 319, height: 39, left: 381, top: 230, position: 'absolute'}}>
            <div className="Cane" style={{width: 319, height: 39, left: 0, top: 0, position: 'absolute', background: '#3D70BD', borderRadius: 118}} />
            <div className="CaneTextField" style={{width: 282, height: 29, left: 27, top: 5, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Cane equipped:<input type="checkbox" checked={isCaneEquipped} onChange={() => setIsCaneEquipped(!isCaneEquipped)} /></div>
        </div>
        <div className="DramaticMustacheGroup" style={{width: 319, height: 39, left: 381, top: 176, position: 'absolute'}}>
            <div className="DramaticMustache" style={{width: 319, height: 39, left: 0, top: 0, position: 'absolute', background: '#3D70BD', borderRadius: 118}} />
            <div className="DaramaticMustacheField" style={{width: 302, height: 29, left: 17, top: 5, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Dramatic Mustache: <input type="checkbox" checked={hasDramaticMustache} onChange={() => setHasDramaticMustache(!hasDramaticMustache)} /></div>
        </div>
        <div className="HairBowGroup" style={{width: 319, height: 39, left: 381, top: 122, position: 'absolute'}}>
            <div className="HairBow" style={{width: 319, height: 39, left: 0, top: 0, position: 'absolute', background: '#3D70BD', borderRadius: 118}} />
            <div className="HairclipField" style={{width: 261, height: 29, left: 17, top: 5, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Hair-clip:<input type="checkbox" checked={isHairClipWorn} onChange={() => setIsHairClipWorn(!isHairClipWorn)} /></div>
        </div>
        <div className="MuzzleGroup" style={{width: 319, height: 39, left: 381, top: 68, position: 'absolute'}}>
            <div className="Muzzle" style={{width: 319, height: 39, left: 0, top: 0, position: 'absolute', background: '#3D70BD', borderRadius: 118}} />
            <div className="MuzzleField" style={{width: 260, height: 29, left: 17, top: 5, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Muzzle<input type="checkbox" checked={isMuzzleWorn} onChange={() => setIsMuzzleWorn(!isMuzzleWorn)} /></div>
        </div>
        <div className="GlassesGroup" style={{width: 319, height: 39, left: 381, top: 14, position: 'absolute'}}>
            <div className="Glasses" style={{width: 319, height: 39, left: 0, top: 0, position: 'absolute', background: '#3D70BD', borderRadius: 118}} />
            <div className="GlassesField" style={{width: 260, height: 29, left: 17, top: 5, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Glasses:<input type="checkbox" checked={areGlassesWorn} onChange={() => setAreGlassesWorn(!areGlassesWorn)} /></div>
        </div>
        <div className="BowtieGroup" style={{width: 319, height: 39, left: 21, top: 230, position: 'absolute'}}>
            <div className="Bowtie" style={{width: 319, height: 39, left: 0, top: 0, position: 'absolute', background: '#3D70BD', borderRadius: 118}} />
            <div className="BowtieField" style={{width: 252, height: 29, left: 43, top: 5, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>BowTie<input type="checkbox" checked={isBowTieWorn} onChange={() => setIsBowTieWorn(!isBowTieWorn)} /></div>
        </div>
        <div className="TopHatGroup" style={{width: 319, height: 39, left: 21, top: 176, position: 'absolute'}}>
            <div className="Tophat" style={{width: 319, height: 39, left: 0, top: 0, position: 'absolute', background: '#3D70BD', borderRadius: 118}} />
            <div className="TophatField" style={{width: 250, height: 29, left: 27, top: 5, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Tophat: <input type="checkbox" checked={isTopHatWorn} onChange={() => setIsTophatWorn(!isTopHatWorn)} /></div>
        </div>
        <div className="FurColorGroup" style={{width: 319, height: 39, left: 21, top: 122, position: 'absolute'}}>
            <div className="FurColor" style={{width: 319, height: 39, left: 0, top: 0, position: 'absolute', background: '#3D70BD', borderRadius: 118}} />
            <div className="FurColorField" style={{width: 234, height: 29, left: 43, top: 2, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Fur Color:<input type="color" style={{width: 50, height: 35}}value={furColor} onChange={(e) => setFurColor(e.target.value)} /></div>
        </div>
        <div className="EyeColorGroup" style={{width: 319, height: 39, left: 21, top: 68, position: 'absolute'}}>
            <div className="Eyecolor" style={{width: 319, height: 39, left: 0, top: 0, position: 'absolute', background: '#3D70BD', borderRadius: 118}} />
            <div className="EyeColorField" style={{width: 234, height: 29, left: 43, top: 5, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>EyeColor:<input type="color" style={{width: 50, height: 35}}value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} /></div>
        </div>
        <div className="NameGroup" style={{width: 319, height: 39, left: 21, top: 14, position: 'absolute'}}>
            <div className="Name" style={{width: 319, height: 39, left: 0, top: 0, position: 'absolute', background: '#3D70BD', borderRadius: 118}} />
            <div className="Name" style={{width: 234, height: 29, left: 43, top: 5, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></div>
        </div>
    </div>
    <div className="UserInventoryHeaderGroup" style={{width: 326, height: 74, left: 1153, top: 5, position: 'absolute'}}>
        <Link to={"/"} onClick={handleLogout}>
        <div className="BackToInventoryDiv" style={{width: 326, height: 74, left: 0, top: 0, position: 'absolute', background: '#D2DBA0', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 70}} />
        <div className="Logout" style={{width: 275.34, height: 37.84, left: 40, top: 18.50, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Kiwi Maru', fontWeight: '500', wordWrap: 'break-word'}}>Logout<br/></div>
        </Link>
    </div>
</div>
    )
}
