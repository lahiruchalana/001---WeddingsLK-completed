import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'

function BtnRender({weddingPlan, deleteWeddingPlan}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addWishToBuyWeddingPlans = state.userAPI.addWishToBuyWeddingPlans

    
    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <Link id="btn_buy" to="#!" 
                    onClick={() =>deleteWeddingPlan(weddingPlan._id, weddingPlan.images_1.public_id)}>
                        Delete
                    </Link>
                    <Link id="btn_view" to={`/edit_weddingPlan/${weddingPlan._id}`}>
                        Edit
                    </Link>
                </>
                : <>

                {/* /////////// only provide view option in here ///////////////// */}
                
                    <Link id="btn_buy" to="/wish_to_buy_wedding_plans" onClick={() => addWishToBuyWeddingPlans(weddingPlan)}>
                        Add to Wish List
                    </Link>

                    <Link id="btn_view" to={`/detail_wedding_plan/${weddingPlan._id}`}>
                        View
                    </Link>
                </>
            }
                
        </div>
    )
}

export default BtnRender
