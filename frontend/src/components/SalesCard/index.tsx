import NotificationButton from "../NotificationButton";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";


function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate()-365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Cofre</h2>
            <div>
                <div className="dsmeta-form-control-container">
                <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">IdCliente</th>
                            <th>Endereço</th>
                            <th className="show992">Data</th>
                            <th className="show992">CNPJ</th>
                            <th>Saldo</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">1</td>
                            <td>Cidade de Deus, 1</td>
                            <td className="show992">01/10/2022</td>
                            <td className="show992">12.345.678/0001-00</td>
                            <td>80.000.000</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#342</td>
                            <td className="show576">2</td>
                            <td>Av. Bussoca, 150</td>
                            <td className="show992">01/09/2022</td>
                            <td className="show992">12.345.678/0006-00</td>
                            <td>150.000,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#343</td>
                            <td className="show576">3</td>
                            <td>Rua Aurora, 10</td>
                            <td className="show992">01/08/2022</td>
                            <td className="show992">12.345.678/0008-00</td>
                            <td>150.000,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>

    )
}
export default SalesCard;