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
    { date: 2023, medname: "Alprazolam", medstrength: "1mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth every day as needed" },
    { date: 2022, medname: "Metformin", medstrength: "1000mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth 4 times daily." },
    { date: 2022, medname: "Losartan", medstrength: "25mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth 3 times daily." },
    { date: 2022, medname: "Januvia", medstrength: "100mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth daily." },
    { date: 2021, medname: "Zolpidem", medstrength: "10mg", doctor: "Emma Roberts", directions: "Take 1 tablet by mouth as needed at bedtime." },
    { date: 2021, medname: "Alprazolam", medstrength: "0.5mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2021, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2020, medname: "Januvia", medstrength: "25mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily." },
    { date: 2020, medname: "Januvia", medstrength: "50mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth every other day." },
    { date: 2020, medname: "Metformin", medstrength: "500mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 2019, medname: "Lisinopril", medstrength: "10mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily." },
    { date: 2019, medname: "Atorvastatin", medstrength: "20mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily at bedtime." },
    { date: 2018, medname: "Metformin", medstrength: "1000mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 2018, medname: "Lorazepam", medstrength: "0.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth as needed for anxiety." },
    { date: 2017, medname: "Levothyroxine", medstrength: "50mcg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { date: 2017, medname: "Lisinopril", medstrength: "20mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily." },
    { date: 2017, medname: "Simvastatin", medstrength: "40mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily in the evening." },
    { date: 2016, medname: "Metformin", medstrength: "500mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 2016, medname: "Alprazolam", medstrength: "0.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2016, medname: "Metoprolol", medstrength: "25mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth twice daily." },
    { date: 2015, medname: "Levothyroxine", medstrength: "50mcg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { date: 2015, medname: "Lisinopril", medstrength: "10mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily." },
    { date: 2015, medname: "Simvastatin", medstrength: "20mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily in the evening." },
    { date: 2014, medname: "Metformin", medstrength: "500mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 2014, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2013, medname: "Lisinopril", medstrength: "5mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily." },
    { date: 2013, medname: "Simvastatin", medstrength: "10mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily in the evening." },
    { date: 2012, medname: "Metformin", medstrength: "500mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 2012, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2011, medname: "Levothyroxine", medstrength: "25mcg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { date: 2011, medname: "Lisinopril", medstrength: "5mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily." },
    { date: 2010, medname: "Metformin", medstrength: "500mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 2010, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2009, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth daily." },
    { date: 2008, medname: "Metformin", medstrength: "500mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 2008, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2007, medname: "Levothyroxine", medstrength: "25mcg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { date: 2007, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth daily." },
    { date: 2006, medname: "Metformin", medstrength: "500mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 2006, medname: "Alprazolam", medstrength: "0.25mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2005, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily." },
    { date: 2005, medname: "Simvastatin", medstrength: "5mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily in the evening." },
    { date: 2004, medname: "Metformin", medstrength: "500mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 2004, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2003, medname: "Levothyroxine", medstrength: "25mcg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { date: 2003, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily." },
    { date: 2002, medname: "Metformin", medstrength: "500mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 2002, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 2001, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth daily." },
    { date: 2001, medname: "Simvastatin", medstrength: "5mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily in the evening." },
    { date: 2000, medname: "Metformin", medstrength: "500mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 2000, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 1999, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth daily." },
    { date: 1999, medname: "Simvastatin", medstrength: "5mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth daily in the evening." },
    { date: 1998, medname: "Metformin", medstrength: "500mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 1998, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 1997, medname: "Levothyroxine", medstrength: "25mcg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { date: 1997, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth daily." },
    { date: 1996, medname: "Metformin", medstrength: "500mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 1996, medname: "Alprazolam", medstrength: "0.25mg", doctor: "James Thompson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 1995, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily." },
    { date: 1995, medname: "Simvastatin", medstrength: "5mg", doctor: "Oliver Davis", directions: "Take 1 tablet by mouth daily in the evening." },
    { date: 1994, medname: "Metformin", medstrength: "500mg", doctor: "Emily Thompson", directions: "Take 1 tablet by mouth twice daily with meals." },
    { date: 1994, medname: "Alprazolam", medstrength: "0.25mg", doctor: "Daniel Wilson", directions: "Take 1 tablet by mouth 3 times daily as needed." },
    { date: 1993, medname: "Levothyroxine", medstrength: "25mcg", doctor: "James Thompson", directions: "Take 1 tablet by mouth daily on an empty stomach." },
    { date: 1993, medname: "Lisinopril", medstrength: "2.5mg", doctor: "Sophia Adams", directions: "Take 1 tablet by mouth daily." },
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
    const [rowsPerPage, setRowsPerPage] = useState(10);

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
                rowsPerPageOptions={[10, 20, 30, 40, 50]}
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
