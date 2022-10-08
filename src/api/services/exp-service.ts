export class ExpService {
  private EXP_KEY = 'EXP_KEY';

  async getExp(): Promise<number> {
    return this.getExpLocalSrorage();
  }

  async addExp(amount: number) {
    const exp = this.getExpLocalSrorage();
    this.setExpLocalSrorage(exp + amount);
  }

  private setExpLocalSrorage(amount: number) {
    localStorage.setItem(this.EXP_KEY, String(amount));
  }

  private getExpLocalSrorage(): number {
    try {
      const str = localStorage.getItem(this.EXP_KEY);
      if (!str) return 0;
      return Number(str);
    } catch (error) {
      return 0;
    }
  }
}

export default new ExpService();
