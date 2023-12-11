
export function Movitel(){
    return(
        <div>
            {/* The button to open modal */}
                <a href="#my_modal_2" className="btn"><h3 className="text-yellow-600"> E-Mola</h3></a>
                {/* Put this part before </body> tag */}
                <div className="modal" id="my_modal_2">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-yellow-600">Movitel</h3>
                    <p className="py-4">A carteira movel e-mola encontra-se indesponivel. Tente mais tarde ou use outros canais de pagamento</p>
                    <div className="modal-action">
                    <a href="#" className="btn">Fechar</a>
                    </div>
                </div>
                </div>
        </div>
    )
}