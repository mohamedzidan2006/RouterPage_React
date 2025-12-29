 import { useState } from 'react';
export default function Interface() {
      const [Phones, setPhones] = useState([
              { name: 'iphoneX', price: 300, Qty: 6 },
              { name: 'iphone11', price: 300, Qty: 8 },
              { name: 'iphone12', price: 300, Qty: 10 },
            ]);
            const AddPhone = () => {
              let Newphone = {
                name: prompt('please enter a new name'),
                price: +prompt('please enter a new price'),
                Qty: +prompt('please enter a new Qty'),
              };
              let copy = [...Phones];
              copy.push(Newphone);
              setPhones(copy);
            }
            const RemovePhone=(index)=>{
              let confirmDelet=confirm('Are you sure');
              if(confirmDelet){
                  let copy=[...Phones];
              copy.splice(index,1);
              setPhones(copy);
              }
            };
            const editPhoneData=(index)=>{
              let Newphone={
                name:prompt('please enter editName'),
                  price:prompt('please enter editPrice'),
                    Qty:prompt('please enter ediQty'),
              }
              let copy=[...Phones];
              copy[index]=Newphone;
              setPhones(copy);
            };
  return (
    <div className="w-full h-dvh">
         <button className="btn btn-primary" onClick={AddPhone}>AddNewPhone</button>
      <table className="table ">
        <thead>
          <tr >
            <th>#</th>
            <th>NamePhone</th>
            <th>ItemsPrice</th>
            <th>Items Qty</th>
            <th>Total</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>
          {
            Phones.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1} </td>
                  <td>{el.name} </td>
                  <td>{el.price} </td>
                  <td>{el.Qty} </td>
                  <td>{el.price * el.Qty} </td>
                  <td><button className="btn btn-warning"onClick={()=>{
                    editPhoneData(index);
                  }}>Edit</button>
                    <button className="btn btn-error" onClick={()=>{
                      RemovePhone(index);
                    }}>Remove</button>
                  </td>
                </tr>
              )

            })
          }

        </tbody>

      </table>
    </div>
  )
}
