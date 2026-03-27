export class Alumno {
  constructor(
    public id: string,
    public nombre: string,
    private saldo: number
  ) {}

  tieneSaldoSuficiente(monto: number): boolean {
    return this.saldo >= monto;
  }

  descontarSaldo(monto: number): void {
    if (!this.tieneSaldoSuficiente(monto)) {
      throw new Error("Saldo insuficiente");
    }
    this.saldo -= monto;
  }

  getSaldo(): number {
    return this.saldo;
  }
}