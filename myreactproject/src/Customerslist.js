import React from "react";

export const Customerslist = ({ list,availabilites }) => {
    return (
        <>
            <div className="container-fluid mt-3">
                <h2>checkin date: 19-june-2021</h2>
            </div>
            <div className="row mt-4 ms-3 me-3">
                {list.map((userlist, index) => (
                    <div className="col-md-12 p-3 mb-5 border border-4 border-danger"  key={index}>
                        <h2>{userlist.name}</h2>
                        {userlist.status==='vip'?availabilites.viplist.map((value,index)=>
                        (
                        <button type="button" className="btn btn-success me-3" key={index}>{value}</button>
                      
                        )):availabilites.regular.map((value,index)=>
                        (
                        <button  type="button" className="btn btn-success me-3" key={index}>{value}</button>
                      
                        ))}
                    </div>

                )
                )
                }

            </div>
        </>
    );
};