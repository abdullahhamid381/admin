import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../Redux/actions/orderActions";
import { toast, ToastContainer } from "react-toastify";
import cart1 from "../../assets/chart1.jpg"
import Orders from "./Orders";

const OrderMain = () => {
    const TotalOrders = useSelector((state) => state.Orders);
    const { loading, error, orders } = TotalOrders;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch, error]);

    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title"> Statics </h2>{" "}
            </div>
            <div className="card mb-4 shadow-sm">
                <header className="card-header bg-white">
                    <div className="row gx-3 py-3">
                        <div className="col-lg-4 col-md-6 me-auto">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="form-control p-2"
                            />
                        </div>{" "}
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option> Status </option> <option> Active </option>{" "}
                                <option> Disabled </option> <option> Show all </option>{" "}
                            </select>{" "}
                        </div>{" "}
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option> Show 20 </option> <option> Show 30 </option>{" "}
                                <option> Show 40 </option>{" "}
                            </select>{" "}
                        </div>{" "}
                    </div>{" "}

                    <div className="card mb-4 shadow-sm">
                <article className="card-body">
                    <h5 className="card-title"> Vacancy Stats </h5>{" "}
                    <img
                        style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "contain",
                        }}
                        src={cart1}
                    />
                </article>{" "}
            </div>
                </header>{" "}
               
            </div>{" "}
        </section>
    );
};

export default OrderMain;
