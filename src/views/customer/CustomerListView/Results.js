// ---------------------------Susimapinau visa telefonus ir adresus kad rodytu viename table cell----------------------------->
// import {
//   Avatar,
//   Box,
//   Card,
//   Checkbox,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TablePagination,
//   TableRow,
//   Typography,
//   makeStyles
// } from '@material-ui/core';
// import React, { useState } from 'react';

// import PerfectScrollbar from 'react-perfect-scrollbar';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import getInitials from 'src/utils/getInitials';
// import moment from 'moment';

// const useStyles = makeStyles(theme => ({
//   root: {},
//   avatar: {
//     marginRight: theme.spacing(2)
//   }
// }));

// const Results = ({ className, customers, ...rest }) => {
//   const classes = useStyles();
//   const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
//   const [limit, setLimit] = useState(10);
//   const [page, setPage] = useState(0);

//   const handleSelectAll = event => {
//     let newSelectedCustomerIds;

//     if (event.target.checked) {
//       newSelectedCustomerIds = customers.map(customer => customer.id);
//     } else {
//       newSelectedCustomerIds = [];
//     }

//     setSelectedCustomerIds(newSelectedCustomerIds);
//   };

//   const handleSelectOne = (event, id) => {
//     const selectedIndex = selectedCustomerIds.indexOf(id);
//     let newSelectedCustomerIds = [];

//     if (selectedIndex === -1) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds,
//         id
//       );
//     } else if (selectedIndex === 0) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds.slice(1)
//       );
//     } else if (selectedIndex === selectedCustomerIds.length - 1) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds.slice(0, -1)
//       );
//     } else if (selectedIndex > 0) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds.slice(0, selectedIndex),
//         selectedCustomerIds.slice(selectedIndex + 1)
//       );
//     }

//     setSelectedCustomerIds(newSelectedCustomerIds);
//   };

//   const handleLimitChange = event => {
//     setLimit(event.target.value);
//   };

//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };

//   return (
//     <Card className={clsx(classes.root, className)} {...rest}>
//       <PerfectScrollbar>
//         <Box minWidth={1050}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell padding="checkbox">
//                   <Checkbox
//                     checked={selectedCustomerIds.length === customers.length}
//                     color="primary"
//                     indeterminate={
//                       selectedCustomerIds.length > 0 &&
//                       selectedCustomerIds.length < customers.length
//                     }
//                     onChange={handleSelectAll}
//                   />
//                 </TableCell>
//                 <TableCell />
//                 <TableCell>First Name</TableCell>
//                 <TableCell>Last Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Location</TableCell>
//                 <TableCell>Phone</TableCell>
//                 <TableCell>Birth date</TableCell>
//                 <TableCell>Registration date</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {customers.slice(0, limit).map(customer => (
//                 <TableRow
//                   hover
//                   key={customer.id}
//                   selected={selectedCustomerIds.indexOf(customer.id) !== -1}
//                 >
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       checked={selectedCustomerIds.indexOf(customer.id) !== -1}
//                       onChange={event => handleSelectOne(event, customer.id)}
//                       value="true"
//                     />
//                   </TableCell>
//                   <TableCell>
          
//                     <Box alignItems="center" display="flex">
//                       <Avatar
//                         className={classes.avatar}
//                         src={customer.avatarUrl}
//                       >
//                         {getInitials(customer.first_name)}
//                       </Avatar>
//                     </Box>
//                   </TableCell>
//                   <TableCell>
//                     <Typography color="textPrimary" variant="body1">
//                       {customer.first_name}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography color="textPrimary" variant="body1">
//                       {customer.last_name}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>{customer.email}</TableCell>
//                    <TableCell>
//                    {customer.addresses.map(element => 
//                    <p> {element.street }, {element.city}, {element.state}, {element.country} </p>)}
//                   </TableCell>
//                   <TableCell>{customer.phone.map(element => 
//                   <p> {element.type} : {element.number} </p>)}
//                   </TableCell>
//                   {/* ------ */}
//                   <TableCell>{customer.birthday}</TableCell>
//                   <TableCell>
//                     {moment(customer.createdAt).format('DD/MM/YYYY')}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Box>
//       </PerfectScrollbar>
//       <TablePagination
//         component="div"
//         count={customers.length}
//         onChangePage={handlePageChange}
//         onChangeRowsPerPage={handleLimitChange}
//         page={page}
//         rowsPerPage={limit}
//         rowsPerPageOptions={[5, 10, 25]}
//       />
//     </Card>
//   );
// };

// Results.propTypes = {
//   className: PropTypes.string,
//   customers: PropTypes.array.isRequired
// };

// export default Results;

// ---------------------------Ne iš kart supratau užduoti tai bandžiau viska perkelti į DataGrid iškomentavau ----------------------------->
// import {
//   Avatar,
//   Box,
//   Card,
//   Checkbox,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TablePagination,
//   TableRow,
//   Typography,
//   makeStyles
// } from '@material-ui/core';
// import React, { useState } from 'react';
// import { DataGrid } from '@material-ui/data-grid';

// import PerfectScrollbar from 'react-perfect-scrollbar';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import getInitials from 'src/utils/getInitials';
// import moment from 'moment';

// const useStyles = makeStyles(theme => ({
//   root: {},
//   avatar: {
//     marginRight: theme.spacing(2)
//   }
// }));

// const Results = ({ className, customers, ...rest }) => {
//   const classes = useStyles();
//   const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
//   const [limit, setLimit] = useState(10);
//   const [page, setPage] = useState(0);

//   const handleSelectAll = event => {
//     let newSelectedCustomerIds;

//     if (event.target.checked) {
//       newSelectedCustomerIds = customers.map(customer => customer.id);
//     } else {
//       newSelectedCustomerIds = [];
//     }

//     setSelectedCustomerIds(newSelectedCustomerIds);
//   };

//   const handleSelectOne = (event, id) => {
//     const selectedIndex = selectedCustomerIds.indexOf(id);
//     let newSelectedCustomerIds = [];

//     if (selectedIndex === -1) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds,
//         id
//       );
//     } else if (selectedIndex === 0) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds.slice(1)
//       );
//     } else if (selectedIndex === selectedCustomerIds.length - 1) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds.slice(0, -1)
//       );
//     } else if (selectedIndex > 0) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds.slice(0, selectedIndex),
//         selectedCustomerIds.slice(selectedIndex + 1)
//       );
//     }

//     setSelectedCustomerIds(newSelectedCustomerIds);
//   };

//   const handleLimitChange = event => {
//     setLimit(event.target.value);
//   };

//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };

//   const columns = [
//   // { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'avatar', headerName: '', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   { field: 'email', headerName: 'Email', width: 250 },
//   { field: 'location', headerName: 'Location', width: 400 },
//   { field: 'phone', headerName: 'Phone', width: 200 },
//   { field: 'birthdate', headerName: 'Birth Date', width: 200 },
//   { field: 'registrationdate', headerName: 'Registration Date', width: 200 },
// ]

// // const rows = [
// //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// // ];

// const rows = []


// // rows.push({id: 1, firstName: 'Jon', lastName: 'Snow',  age: 35 })
// // customers.map(customer => customer.id)
// // rows.push(customers.map(customer => { customer["id"] = customer.id, customer["firstName"] = customer.first_name }))



// for(let i=0; i<customers.length; i++){
//   rows.push({ avatar: customers[i].avatarUrl ,id: customers[i].id ,firstName: customers[i].first_name, lastName: customers[i].last_name, email: customers[i].email, location: customers[i].addresses.map(element => 
//   `${element.street} , ${element.city}, ${element.state}, ${element.country}`), phone : customers[i].phone.map(element => `${ element.number}`), birthdate: customers[i].birthday , registrationdate: moment(customers[i].createdAt).format('DD/MM/YYYY')})
// }

//   return (
//         <div style={{ height: 400, width: '100%' }}>
//           <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
//         </div>
//       );
// };

// Results.propTypes = {
//   className: PropTypes.string,
//   customers: PropTypes.array.isRequired
// };

// export default Results;
// --------------------------------------------------------
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import React, { useState } from 'react';


import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import getInitials from 'src/utils/getInitials';
import moment from 'moment';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';



const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row({customer, selected, checked , handleSelectOne}) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root} 
       hover
       key={customer.id}
       selected={selected}
     
       >
        <TableCell >
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell padding="checkbox" >
          <Checkbox

            checked={checked}
            onChange={event => handleSelectOne(event, customer.id)}
            value="true"
          />
        </TableCell>
        <TableCell>

          <Box alignItems="center" display="flex">
            <Avatar
              className={classes.avatar}
              src={customer.avatarUrl}
            >
              {getInitials(customer.first_name)}
            </Avatar>
          </Box>
        </TableCell>
        <TableCell>
          <Typography color="textPrimary" variant="body1">
            {customer.first_name}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color="textPrimary" variant="body1">
            {customer.last_name}
          </Typography>
        </TableCell>
        <TableCell>{customer.email}</TableCell>
       <TableCell>
         {customer.addresses[0].street} , {customer.addresses[0].city}, {customer.addresses[0].state}, {customer.addresses[0].country} 
        </TableCell> 
        <TableCell>
        {customer.phone[0].type} : {customer.phone[0].number} 
        </TableCell> 
        <TableCell>{customer.birthday}</TableCell>
        <TableCell>
          {moment(customer.createdAt).format('DD/MM/YYYY')}
        </TableCell>
     
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}  >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
           
       <h4> Adresses :</h4> {customer.addresses.map(element => 
          <p> {element.street }, {element.city}, {element.state}, {element.country} </p>)}
       <br/>
       <h4> Phones :</h4> 
    {customer.phone.map(element => 
        <p> {element.type} : {element.number} </p>)}
       
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map(customer => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow  >
         
                <TableCell />
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell />
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Birth date</TableCell>
                <TableCell>Registration date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >

              {customers.slice(0, limit).map(customer => (

                <Row customer={customer} selected={selectedCustomerIds.indexOf(customer.id) !== -1} checked={selectedCustomerIds.indexOf(customer.id) !== -1} 
                handleSelectOne={handleSelectOne}  key={customer.id} 
                />

              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};


export default Results;