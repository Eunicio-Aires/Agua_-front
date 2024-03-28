import Image from 'next/image'
import hands from '../../../public/hands4903050-1280e16238370891651090x613removebgpreview-1@2x copy.png';


export default function Figma(){

  return(

    <div className="pt-4 min-h-screen bg-gradient-to-tr from-gray-50  via-slate-100 to-cyan-200">

        <div className="pt-2 bg-opacity-50 bg-white bg-blur-md shadow-lg rounded-lg fixed">
            <h2 className ="text-center bg-gradient-to-r from-slate-100 to-indigo-700 bg-clip-text text-transparent text-xl font-semibold ">Eunicio Jose Aires</h2>
            <p className ="text-center mb-4" >Aguas Mulungo</p>
            {/* <p className ="text-center">Bairro Sao Damaso,c-20 q-10 1350 </p>
            <p className ="text-center">849903403</p> */}
            
        </div>

        <Image className ="opacity-40 fixed mt-6"
        alt="hands"
        // Importing an image will
        // automatically set the width and height
        src={hands}
        sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
<section className="flex flex-wrap justify-center mt-6 absolute">
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-opacity-30 bg-white bg-blur-md shadow-lg p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-2 text-center "> Janeiro </h2>
                    {/* <p className=''>Conteúdo do Card 1...</p> */}
                    <div className="flex justify-between">
                        <div>Leitura atual</div>
                        <div><p >1320 m</p></div>
                     </div>

                     <div className="flex justify-between">
                            <div>Leitura anterior</div>
                            <div>1212 m</div>
                     </div>

                     <div className="flex justify-between">
                            <div>Consumo</div>
                            <div>11 m</div>
                     </div>

                     <div className="flex justify-between">
                            <div>Valor a pagar</div>
                            <div className="text-red-900">1350.00 Mtn</div>
                     </div>


                     <button className="btn btn-sm mt-3 btn-accent">Accent</button>
                    </div>

                    
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-2 text-center">Card 2</h2>
                    <p>Conteúdo do Card 2...</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-2">Card 3</h2>
                    <p>Conteúdo do Card 3...</p>
                    </div>
                </div>
            </ section >

      
    </div >
    // <>
    //   <div className="w-[390px] rounded-3xs bg-white h-[844px] overflow-hidden text-center text-3xs text-lightseagreen font-poppins">
    //   <img
    //     className="absolute top-[454px] left-[3px] w-[274.2px] h-[389.7px] object-contain"
    //     alt=""
    //     src="/ellipse-2.svg"
    //   />
    //   <div className="absolute top-[391px] left-[76px] text-13xl [text-shadow:0.5px_0_0_#04adbf,_0_0.5px_0_#04adbf,_-0.5px_0_0_#04adbf,_0_-0.5px_0_#04adbf]">
    //     Fatura na mão
    //   </div>
    //   <img
    //     className="absolute top-[0px] left-[3px] w-[386px] h-[290px] object-cover"
    //     alt=""
    //     src="/hands4903050-1280e16238370891651090x613removebgpreview-1@2x.png"
    //   />
    //   <div className="absolute top-[823px] left-[147px] text-darkcyan-100">
    //     <span>{`designed by `}</span>
    //     <span className="text-gray">E.Aires</span>
    //   </div>
    //   <div className="absolute top-[452px] left-[17px] text-[13px] text-darkcyan-200 inline-block w-[357px] h-12">
    //     <p className="m-0">Faça consulta das suas faturas e</p>
    //     <p className="m-0"> pague sem sair de casa</p>
    //   </div>
    //   <div className="absolute top-[588.5px] left-[37.5px] box-border w-[313px] h-px border-t-[1px] border-solid border-darkcyan-200" />
    //   <div className="absolute top-[618px] left-[33px] rounded-3xs bg-lightseagreen w-[325px] h-[38px]" />
    //   <div className="absolute top-[622px] left-[159px] text-[20px] text-white [-webkit-text-stroke:0.3px_#fff]">
    //     Entrar
    //   </div>
    //   <div className="absolute top-[564px] left-[159px] text-[14px] font-abeezee text-darkturquoise">
    //     Codigo
    //   </div>
    //   <div className="absolute top-[678px] left-[52px] text-darkcyan-300 whitespace-pre-wrap">
    //     {" "}
    //     Mais imformacoes entre em contato aqui
    //   </div>
    //   <img
    //     className="absolute top-[555px] left-[23px] w-[59px] h-[26px] object-cover"
    //     alt=""
    //     src="/person@2x.png"
    //   />
    //   <img
    //     className="absolute top-[1px] left-[104px] w-[285px] h-[390px]"
    //     alt=""
    //     src="/ellipse-2.svg"
    //   />
    //   <img
    //     className="absolute top-[674px] left-[272px] w-[45px] h-7 object-cover"
    //     alt=""
    //     src="/ringer-volume@2x.png"
    //   />
    //   <img
    //     className="absolute top-[674px] left-[317px] w-[34px] h-7 object-cover"
    //     alt=""
    //     src="/mail-account@2x.png"
    //   />
    // </div>
    // </>
  )
}