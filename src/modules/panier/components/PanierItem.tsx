import { IconButton } from "@/components/Buttons/Buttons";
import { ExtendProduit } from "@/types/commandes";
import React from "react";
import { BiTrash } from "react-icons/bi";
import {useDispatch} from 'react-redux' 
import { removeItemFromCart, updateCartItemQuantity } from "../api";

interface Props {
  produit: ExtendProduit;
}

const PanierItem: React.FC<Props> = (props) => {
  
    const { produit } = props;

    const dispatch = useDispatch()

  const {description, id, image, nom, prix, tva, quantite} = produit

  const handlerRemoveProduit =() => {
    dispatch(removeItemFromCart({produit, quantite}))
  }

  const handlerChange = (quantite: string) => {
    const qte = parseInt(quantite)
    dispatch(updateCartItemQuantity({produit, quantite: qte}))
  }

  return (
    <li className="flex items-center gap-4">
      <img
        src={image}
        alt=""
        className="h-16 w-16 rounded object-cover"
      />
      <div>
        <h3 className="text-sm text-gray-900">{nom}</h3>

        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Description :</dt>
            <dd className="inline">{description}</dd>
          </div>

          <div>
            <dt className="inline">Prix : </dt>
            <dd className="inline">{prix} Fr</dd>
          </div>

          <div>
            <dt className="inline">Prix Total : </dt>
            <dd className="inline">{prix * quantite} Fr</dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <form>
          <label htmlFor="Line1Qty" className="sr-only">
            {" "}
            Quantity{" "}
          </label>

          <input
            type="number"
            min="1"
            value={quantite}
            onChange={(e) => handlerChange(e.target.value)}
            id="Line1Qty"
            className="h-10 w-12 rounded border-yellow-300 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          />
        </form>
        <IconButton action={() => {handlerRemoveProduit()}} icon={<BiTrash/>}/>
      </div>
    </li>
  );
};

export default PanierItem;
