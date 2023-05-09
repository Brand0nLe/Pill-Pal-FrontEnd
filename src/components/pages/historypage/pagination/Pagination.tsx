import React, { useState } from "react";
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    TablePagination,
} from "@mui/material";

interface Row {
    date: any;
    medname: string;
    medstrength: any;
    doctor: string;
    directions: string;
    [key: string]: any;
}

const rows: Row[] = [
    { date: 2023, medname: "Alprazolam", medstrength: "1mg", doctor: "Harpreet Singh", directions: "Take 1 tablet by everyday as needed" },
    { date: 2022, medname: "Metformin", medstrength: "1000mg", doctor: "Harpreet Singh", directions: "Take 1 tablet by mouth 4 times daily." },
    { date: 2022, medname: "Losartan", medstrength: "25mg", doctor: "Harpreet Singh", directions: "Take 1 tablet by mouth 3 times daily." },    
    { date: 2022, medname: "Januvia", medstrength: "100mg", doctor: "Harpreet Singh", directions: "Take 1 tablet by mouth daily." },
    { date: 2021, medname: "Zolpidem", medstrength: "10mg", doctor: "Harpreet Singh", directions: "Take 1 tablet by mouth as needed at bedtime." },
    { date: 2021, medname: "Alprazolam", medstrength: "0.5mg", doctor: "Harpreet Singh", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2021, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Harpreet Singh", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2020, medname: "Januvia", medstrength: "25mg", doctor: "Harpreet Singh", directions: "Take 1 tablet by mouth daily." },
    { date: 2020, medname: "Januvia", medstrength: "50mg", doctor: "Harpreet Singh", directions: "Take 1 tablet by mouth every other day." },
    // add more rows here
];

const columns = [
    { id: "date", label: "Date Prescribed", minWidth: 50 },
    { id: "medname", label: "Medication", minWidth: 50 },
    { id: "medstrength", label: "Strength", minWidth: 50 },
    { id: "doctor", label: "Prescribing Doctor", minWidth: 100 },
    { id: "directions", label: "Directions for Use", minWidth: 100 },
    // add more columns here
];

const TableWithPagination = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.id} align="left" style={{ minWidth: column.minWidth }}>
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <TableRow key={row.id}>
                            {columns.map((column) => (
                                <TableCell key={column.id} align="left">
                                    {row[column.id]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
};

export default TableWithPagination;
