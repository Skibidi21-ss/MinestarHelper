import {
  SlashCommandBuilder,
  MessageFlags,
  ContainerBuilder,
  TextDisplayBuilder,
  SeparatorBuilder,
  SeparatorSpacingSize,
} from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('cennik')
    .setDescription('Wysyła cennik MinestarHelper')
    .setDMPermission(false),

  category: 'Utility',

  async execute(interaction) {
    if (!interaction.channel?.isSendable()) {
      await interaction.reply({
        content: '❌ Nie mogę wysłać cennika na tym kanale.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    // Odpowiedź techniczna widoczna tylko dla osoby używającej komendy.
    await interaction.deferReply({
      flags: MessageFlags.Ephemeral,
    });

    const panel = new ContainerBuilder()
      .setAccentColor(0x8b5cf6)

      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
          '# MinestarHelper • Cennik i płatności'
        )
      )

      // Linia bezpośrednio pod dużym tytułem.
      .addSeparatorComponents(
        new SeparatorBuilder()
          .setDivider(true)
          .setSpacing(SeparatorSpacingSize.Small)
      )

      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
          [
            '## Dostępne metody płatności',
            '',
            '<:blik:1531041709012553950> **BLIK**',
            '<:blik:1531041709012553950> **Kod BLIK**',
            '<:psc:1531041744219799552> **PaySafeCard (PSC)**',
            '<:minestar:1531041636602351727> **Itemy i waluta Minestar SkyPvP**',
          ].join('\n')
        )
      )

      .addSeparatorComponents(
        new SeparatorBuilder()
          .setDivider(true)
          .setSpacing(SeparatorSpacingSize.Small)
      )

      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
          [
            '## Cennik',
            '',
            '💜 **MinestarHelper — 20 zł**',
            '',
            '💬 **Ceny są do negocjacji.**',
            'Przy płatności itemami lub walutą Minestar SkyPvP wycena jest ustalana indywidualnie.',
            '',
            '🛒 Aby dokonać zakupu, utwórz ticket..',
          ].join('\n')
        )
      );

    // To jest zwykła wiadomość wysłana przez bota.
    await interaction.channel.send({
      flags: MessageFlags.IsComponentsV2,
      components: [panel],
    });

    // Usuwa niewidoczną odpowiedź techniczną komendy.
    await interaction.deleteReply().catch(() => {});
  },
};
