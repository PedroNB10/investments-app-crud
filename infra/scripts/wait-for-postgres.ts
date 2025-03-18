import { exec } from 'child_process';

function checkPostgres() {
  exec('docker exec postgres-dev pg_isready --host localhost', handleReturn);

  function handleReturn(error: any, stdout: string) {
    if (stdout.search('accepting connections') === -1) {
      process.stdout.write('.');
      checkPostgres();
      return;
    }

    console.log('\n🟢 Postgres is ready and accepting new connections\n');
  }
}

process.stdout.write('🔴 Waiting for Postgres making connections');
checkPostgres();
