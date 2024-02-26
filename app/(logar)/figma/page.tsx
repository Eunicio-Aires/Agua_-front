
export default function Figma(){

    return(
        <div className="w-[390px] rounded-3xs bg-white h-[844px] overflow-hidden text-center text-3xs text-lightseagreen font-poppins"> 
      <div className="absolute top-[391px] left-[76px] text-[32px] [text-shadow:0.5px_0_0_#04adbf,_0_0.5px_0_#04adbf,_-0.5px_0_0_#04adbf,_0_-0.5px_0_#04adbf]">
        Fatura na mão
      </div>
      <img
        className="absolute top-[0px] left-[3px] w-[386px] h-[290px] object-cover"
        alt=""
        src="/hands4903050-1280e16238370891651090x613removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[-73px] left-[97px] w-[469px] h-[435px]"
        alt=""
        src="/ellipse-1.svg"
      />
      <div className="absolute top-[823px] left-[147px] text-darkcyan-100">
        <span>{`designed by `}</span>
        <span className="text-gray">E.Aires</span>
      </div>
      <div className="absolute top-[452px] left-[17px] text-[13px] text-darkcyan-200 inline-block w-[357px] h-12">
        <p className="m-0">Faça consulta das suas faturas e</p>
        <p className="m-0"> pague sem sair de casa</p>
      </div>
      <div className="absolute top-[588.5px] left-[37.5px] box-border w-[313px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[618px] left-[33px] rounded-3xs bg-lightseagreen w-[325px] h-[38px]" />
      <div className="absolute top-[622px] left-[159px] text-[20px] text-white [-webkit-text-stroke:0.3px_#fff]">
        Entrar
      </div>
      <div className="absolute top-[564px] left-[159px] text-[14px] font-abeezee text-darkturquoise">
        Codigo
      </div>
      <div className="absolute top-[678px] left-[52px] text-darkcyan-300 whitespace-pre-wrap">
        {" "}
        Mais imformacoes entre em contato aqui
      </div>
      <img
        className="absolute top-[555px] left-[23px] w-[59px] h-[26px] object-cover"
        alt=""
        src="/person@2x.png"
      />
    </div>
    )
}