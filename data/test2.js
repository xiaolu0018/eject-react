const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = (req, res) => {
    let mod = Mock.mock({
        'dataList|1-10':[{
            ip: '192.22.121.222',
            pid: Random.integer(0, 100),
            pna: Random.cword(3, 20),
            time: '',
            con: Random.natural(0, 100),
            tx: 0,
            rx: Random.float(0, 1000) + 'px',
            txp: Random.float(0, 1000),
            rxp: Random.natural(0, 100)
        }],
        'success': true,
        'message': null,
        'data': {
            name: Random.cname()
        },
        'pageNum': 1,
        'pageSize': 10,
        'totalNum': 30
    })

    return res.json(mod);
}