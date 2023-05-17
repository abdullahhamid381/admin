import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div >
            <aside className="navbar-aside" id="offcanvas_aside">
                <div className="aside-top">
                    <Link to="/" className="brand-wrap" style={{textDecoration:'none'}}>
                        <h1 style={{color:' rgb(33, 37, 41)'}}>IGAP</h1>
                    </Link>
                    <div>
                        <button className="btn btn-icon btn-aside-minimize">
                            <i className="text-muted fas fa-stream"></i>
                        </button>
                    </div>
                </div>

                <nav>
                    <ul className="menu-aside">
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/"
                                exact={true}
                            >
                                <i className="icon fas fa-home"></i>
                                <span className="text">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/products"
                            >
                                <i className="icon fas fa-shopping-bag"></i>
                                <span className="text">Jobs</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/addproduct"
                            >
                                <i className="icon fas fa-cart-plus"></i>
                                <span className="text">Applications</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/category"
                            >
                                <i className="icon fas fa-list"></i>
                                <span className="text">Messages</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/orders"
                            >
                                <i className="icon fas fa-bags-shopping"></i>
                                <span className="text">Statics</span>
                            </NavLink>
                        </li>
                      
                    </ul>
                    <br />
                    <br />
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;
