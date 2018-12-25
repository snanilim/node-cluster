const cluster = require('cluster');
const os = require('os');

// mock db
const numberOfUserOnDB = () => {
    this.count = this.count || 5;
    this.count = this.count * this.count;
    return this.count;
}

// mock db

if(cluster.isMaster){
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} Cpus`);
    for (let i = 0; i<cpus; i++){
        cluster.fork();
    }
    console.dir(cluster.workers, { depth: 0 });

    const updateWorkers = () => {
        const userCount = numberOfUserOnDB();

        Object.values(cluster.workers).forEach(worker => {
            worker.send({ userCount });
        })
    }

    updateWorkers();
    setInterval(updateWorkers, 1000);
   
}else{
    require('./server-2');
}
