
export default  function PastDataFun(pd)
{  
    const ids =pd.map(i => i.id)
 
return pd.filter(({id}, index) => !ids.includes(id, index + 1))
}   
















//console.log(pd,'of')
//     console.log([...new Map(pd.map(item=>[item[key] , item] )).values()],)
// return [...new Map(pd.map(item=>[item[key] , item] )).values()]