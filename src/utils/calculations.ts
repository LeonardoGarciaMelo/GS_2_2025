import { Entry } from '../types';

export const calculations = {
  /**
   * Calcular média de um campo específico
   */
  calculateAverage(entries: Entry[], field: keyof Omit<Entry, 'id' | 'date'>): string {
    if (entries.length === 0) return '0';
    const sum = entries.reduce((acc, entry) => acc + entry[field], 0);
    return (sum / entries.length).toFixed(1);
  },

  /**
   * Calcular streak de dias consecutivos
   */
  calculateStreak(entries: Entry[]): number {
    if (entries.length === 0) return 0;

    const sortedEntries = [...entries].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    for (const entry of sortedEntries) {
      const entryDate = new Date(entry.date);
      entryDate.setHours(0, 0, 0, 0);

      const diffDays = Math.floor(
        (currentDate.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diffDays === streak) {
        streak++;
        currentDate = entryDate;
      } else {
        break;
      }
    }

    return streak;
  },

  /**
   * Gerar insights inteligentes baseados nos dados
   */
  generateInsights(entries: Entry[]): string[] {
    if (entries.length < 3) {
      return ['Registre mais dias para gerar insights personalizados!'];
    }

    const insights: string[] = [];

    // Análise sono x produtividade
    const highSleep = entries.filter(e => e.sleep >= 7);
    const lowSleep = entries.filter(e => e.sleep < 7);

    if (highSleep.length > 0 && lowSleep.length > 0) {
      const highSleepProd =
        highSleep.reduce((acc, e) => acc + e.productivity, 0) / highSleep.length;
      const lowSleepProd =
        lowSleep.reduce((acc, e) => acc + e.productivity, 0) / lowSleep.length;

      if (highSleepProd > lowSleepProd) {
        const diff = Math.round((highSleepProd / lowSleepProd - 1) * 100);
        insights.push(
          `💤 Você é ${diff}% mais produtivo quando dorme 7h ou mais!`
        );
      }
    }

    // Análise de estresse
    const avgStress = parseFloat(this.calculateAverage(entries, 'stress'));
    if (avgStress > 3.5) {
      insights.push(
        `⚠️ Seu nível de estresse está elevado (${avgStress.toFixed(1)}/5). Considere pausas regulares.`
      );
    } else if (avgStress < 2.5) {
      insights.push(
        `✨ Ótimo! Seu estresse está controlado (${avgStress.toFixed(1)}/5).`
      );
    }

    // Tendência de produtividade
    const recentEntries = entries.slice(-5);
    const olderEntries = entries.slice(0, -5);

    if (recentEntries.length > 0 && olderEntries.length > 0) {
      const recentProd =
        recentEntries.reduce((acc, e) => acc + e.productivity, 0) /
        recentEntries.length;
      const olderProd =
        olderEntries.reduce((acc, e) => acc + e.productivity, 0) /
        olderEntries.length;

      if (recentProd > olderProd) {
        insights.push(`📈 Sua produtividade está em alta! Continue assim!`);
      } else if (recentProd < olderProd) {
        insights.push(
          `📉 Sua produtividade caiu recentemente. Analise o que mudou.`
        );
      }
    }

    return insights.length > 0
      ? insights
      : ['Continue registrando para mais insights!'];
  },

  /**
   * Formatar data para pt-BR
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  },
};