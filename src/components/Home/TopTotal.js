import React from "react";

const TopTotal = ({ orders, products }) => {
    const sales = 0;
    if (orders) {
        orders.map((order) =>
            order.isPaid === true ? (sales = sales + order.totalPrice) : null
        );
    }
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm" style={{background:'#40189D'}}>
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-primary">
                            <i className="text-primary fas fa-user"> </i>{" "}
                        </span>{" "}
                        <div className="text">
                            <h6 className="mb-1" style={{color:'white'}}> Profile </h6> <span style={{color:'white'}}>20</span>
                        </div>{" "}
                    </article>{" "}
                </div>{" "}
            </div>{" "}
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm" style={{background:'#1BD084'}}>
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-success">
                            <i className="text-success fas fa-bags-shopping"> </i>{" "}
                        </span>{" "}
                        <div className="text">
                            <h6 className="mb-1" style={{color:'white'}}> Interviews </h6>{" "}
                            <span style={{color:'white'}}> 40 </span>{" "}
                        </div>{" "}
                    </article>{" "}
                </div>{" "}
            </div>{" "}
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm" style={{background:'#48A9F8'}}>
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-warning">
                            <i className="text-warning fas fa-shopping-bag"> </i>{" "}
                        </span>{" "}
                        <div className="text">
                            <h6 className="mb-1" style={{color:'white'}}> Message </h6>{" "}
                            <span style={{color:'white'}}> 10 </span>{" "}
                        </div>{" "}
                    </article>{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
};

export default TopTotal;
