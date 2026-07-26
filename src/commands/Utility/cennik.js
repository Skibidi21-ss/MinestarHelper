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
        '⭐ **Waluta serwerowa i itemy (SkyPvP)**',
        '',
        '**Cennik:**',
        '',
        '• **20zł**',
        '',
        '💬 **Ceny są do negocjacji.**',
        'Przy płatności przedmiotami na Minestar SkyPvP wycena jest ustalana indywidualnie.',
        '',
        '🛒 Aby dokonać zakupu, utwórz ticket.',
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
