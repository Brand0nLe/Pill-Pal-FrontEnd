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
    { id: 1, date: new Date(2023, 4, 19), medname: "Alprazolam", medstrength: "1mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth every day as needed" },
    { id: 2, date: new Date(2023, 3, 29), medname: "Metformin", medstrength: "1000mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth 4 times daily." },
    { id: 3, date: new Date(2023, 3, 7), medname: "Losartan", medstrength: "25mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth 3 times daily." },
    { id: 4, date: new Date(2023, 2, 16), medname: "Januvia", medstrength: "100mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth daily." },
    { id: 5, date: new Date(2023, 1, 22), medname: "Zolpidem", medstrength: "10mg", doctor: "Emma Roberts", directions: "Take 1 tablet by mouth as needed at bedtime." },
    { id: 6, date: new Date(2023, 0, 25), medname: "Alprazolam", medstrength: "0.5mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 7, date: new Date(2022, 11, 29), medname: "Alprazolam", medstrength: "0.25mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 8, date: new Date(2022, 11, 1), medname: "Januvia", medstrength: "25mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily." },
    { id: 9, date: new Date(2022, 10, 4), medname: "Januvia", medstrength: "50mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth every other day." },
    { id: 10, date: new Date(2022, 9, 8), medname: "Metformin", medstrength: "500mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 11, date: new Date(2022, 8, 11), medname: "Lisinopril", medstrength: "10mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily." },
    { id: 12, date: new Date(2022, 7, 16), medname: "Atorvastatin", medstrength: "20mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily at bedtime." },
    { id: 13, date: new Date(2022, 6, 18), medname: "Metformin", medstrength: "1000mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 14, date: new Date(2022, 5, 21), medname: "Lorazepam", medstrength: "0.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth as needed for anxiety." },
    { id: 15, date: new Date(2022, 4, 23), medname: "Levothyroxine", medstrength: "50mcg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { id: 16, date: new Date(2022, 3, 24), medname: "Lisinopril", medstrength: "20mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily." },
    { id: 17, date: new Date(2022, 2, 25), medname: "Simvastatin", medstrength: "40mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily in the evening." },
    { id: 18, date: new Date(2022, 1, 24), medname: "Metformin", medstrength: "500mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 19, date: new Date(2022, 0, 22), medname: "Alprazolam", medstrength: "0.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 20, date: new Date(2021, 11, 19), medname: "Metoprolol", medstrength: "25mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth twice daily." },
    { id: 21, date: new Date(2021, 10, 16), medname: "Levothyroxine", medstrength: "50mcg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { id: 22, date: new Date(2021, 9, 12), medname: "Lisinopril", medstrength: "10mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily." },
    { id: 23, date: new Date(2021, 8, 7), medname: "Simvastatin", medstrength: "20mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily in the evening." },
    { id: 24, date: new Date(2021, 7, 2), medname: "Metformin", medstrength: "500mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 25, date: new Date(2021, 5, 26), medname: "Alprazolam", medstrength: "0.25mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 26, date: new Date(2021, 4, 19), medname: "Lisinopril", medstrength: "5mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily." },
    { id: 27, date: new Date(2021, 3, 11), medname: "Simvastatin", medstrength: "10mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily in the evening." },
    { id: 28, date: new Date(2021, 2, 3), medname: "Metformin", medstrength: "500mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 29, date: new Date(2021, 0, 23), medname: "Alprazolam", medstrength: "0.25mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 30, date: new Date(2020, 11, 12), medname: "Levothyroxine", medstrength: "25mcg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { id: 31, date: new Date(2020, 10, 1), medname: "Lisinopril", medstrength: "5mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily." },
    { id: 32, date: new Date(2020, 8, 19), medname: "Metformin", medstrength: "500mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 33, date: new Date(2020, 7, 7), medname: "Alprazolam", medstrength: "0.25mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 34, date: 2009, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth daily." },
    { id: 35, date: 2008, medname: "Metformin", medstrength: "500mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 36, date: 2008, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 37, date: 2007, medname: "Levothyroxine", medstrength: "25mcg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { id: 38, date: 2007, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth daily." },
    { id: 39, date: 2006, medname: "Metformin", medstrength: "500mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 40, date: 2006, medname: "Alprazolam", medstrength: "0.25mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 41, date: 2005, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily." },
    { id: 42, date: 2005, medname: "Simvastatin", medstrength: "5mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily in the evening." },
    { id: 43, date: 2004, medname: "Metformin", medstrength: "500mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 44, date: 2004, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 45, date: 2003, medname: "Levothyroxine", medstrength: "25mcg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { id: 46, date: 2003, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily." },
    { id: 47, date: 2002, medname: "Metformin", medstrength: "500mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 48, date: 2002, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 49, date: 2001, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth daily." },
    { id: 50, date: 2001, medname: "Simvastatin", medstrength: "5mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily in the evening." },
    { id: 51, date: 2000, medname: "Metformin", medstrength: "500mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 52, date: 2000, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 53, date: 1999, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth daily." },
    { id: 54, date: 1999, medname: "Simvastatin", medstrength: "5mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth daily in the evening." },
    { id: 55, date: 1998, medname: "Metformin", medstrength: "500mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 56, date: 1998, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 57, date: 1997, medname: "Levothyroxine", medstrength: "25mcg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { id: 58, date: 1997, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth daily." },
    { id: 59, date: 1996, medname: "Metformin", medstrength: "500mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 60, date: 1996, medname: "Alprazolam", medstrength: "0.25mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 61, date: 1995, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily." },
    { id: 62, date: 1995, medname: "Simvastatin", medstrength: "5mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily in the evening." },
    { id: 63, date: 1994, medname: "Metformin", medstrength: "500mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { id: 64, date: 1994, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { id: 65, date: 1993, medname: "Levothyroxine", medstrength: "25mcg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { id: 66, date: 1993, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily." },
    { id: 67, date: new Date(1993, 0, 13), medname: "Lisinopril", medstrength: "10mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily." },
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
    const [rowsPerPage, setRowsPerPage] = useState(15);

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
                rowsPerPageOptions={[15, 20, 30, 40, 50]}
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
