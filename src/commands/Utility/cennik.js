import {
  SlashCommandBuilder,
  PermissionFlagsBits,
} from 'discord.js';

import { createEmbed } from '../../utils/embeds.js';

export default {
  data: new SlashCommandBuilder()
    .setName('cennik')
    .setDescription('Wysyła cennik MinestarHelper')
    .setDMPermission(false)
    .setDefaultMemberPermissions(
      PermissionFlagsBits.ManageMessages
    ),

  category: 'Utility',

  async execute(interaction) {
    const embed = createEmbed({
      title: '💜 MinestarHelper • Cennik i płatności',

      description: [
        '**Dostępne metody płatności:**',
        '',
        '💳 **BLIK**',
        '🎟️ **PaySafeCard (PSC)**',
        '💙 **PayPal**',
        '⭐ **Przedmioty Minestar SkyPvP**',
        '',
        '**Cennik:**',
        '',
        '• **1 miesiąc — 20 zł**',
        '• **3 miesiące — 45 zł**',
        '• **Lifetime — 80 zł**',
        '',
        '💬 **Ceny są do negocjacji.**',
        'Przy płatności przedmiotami na Minestar SkyPvP wycena jest ustalana indywidualnie.',
        '',
        '🛒 Aby dokonać zakupu, utwórz ticket w kategorii **Kupno moda**.',
      ].join('\n'),

      color: '#8b5cf6',

      footer: {
        text: 'MinestarHelper • Oficjalny cennik',
      },
    });

    await interaction.reply({
      embeds: [embed],
    });
  },
};
