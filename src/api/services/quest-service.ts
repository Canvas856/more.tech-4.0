import { quests as mockQuests } from '~/mock/initialQuests';
import { Quest } from '~/types/quest';

export class QuestService {
  private QUESTS_KEY = 'QUESTS_KEY';

  async initQuests() {
    const quests = this.getQuestsLocalSrorage();
    if (!quests) this.setQuestsLocalSrorage(mockQuests);
  }

  async setQuests(quests: Quest[]) {
    this.setQuestsLocalSrorage(quests);
  }

  async getQuests(): Promise<Quest[]> {
    await this.initQuests();
    return this.getQuestsLocalSrorage() || [];
  }

  private setQuestsLocalSrorage(quests: Quest[]) {
    localStorage.setItem(this.QUESTS_KEY, JSON.stringify(quests));
  }

  private getQuestsLocalSrorage(): Quest[] | undefined {
    try {
      const str = localStorage.getItem(this.QUESTS_KEY);
      if (!str) return undefined;
      return JSON.parse(str);
    } catch (error) {
      return undefined;
    }
  }
}

export default new QuestService();
