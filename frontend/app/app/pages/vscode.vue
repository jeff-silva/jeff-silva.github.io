<template>
  <div>
    <app-vscode fullscreen>
      <v-row>
        <v-col cols="1">aaa</v-col>
        <v-col cols="3">aaa</v-col>
        <v-col cols="8">aaa</v-col>
      </v-row>
      <vscode-progress-bar></vscode-progress-bar>

      <vscode-badge variant="activity-bar-counter">aaa</vscode-badge>
      <vscode-textfield></vscode-textfield>

      <vscode-single-select id="select-example">
        <vscode-option description="Consectetur adipiscing elit">Lorem</vscode-option>
        <vscode-option selected description="Donec elit odio">Ipsum</vscode-option>
        <vscode-option description="Aliquam ac vulputate eros">Dolor</vscode-option>
      </vscode-single-select>

      <vscode-button class="p-2">
        <vscode-icon name="files" size="20"></vscode-icon>
      </vscode-button>
      <vscode-button class="p-2">
        <vscode-icon name="search" size="20"></vscode-icon>
      </vscode-button>
      <vscode-button class="p-2">
        <vscode-icon name="debug-alt" size="20"></vscode-icon>
      </vscode-button>
      <vscode-button class="p-2">
        <vscode-icon name="extensions" size="20"></vscode-icon>
      </vscode-button>

      <vscode-tabs selected-index="4" class="h-full">
        <vscode-tab-header slot="header" class="p-2"> PROBLEMS </vscode-tab-header>
        <vscode-tab-panel class="p-2">
          <div>PROBLEMS</div>
        </vscode-tab-panel>

        <vscode-tab-header slot="header" class="p-2"> OUTPUT </vscode-tab-header>
        <vscode-tab-panel class="p-2">
          <div>OUTPUT</div>
        </vscode-tab-panel>

        <vscode-tab-header slot="header" class="p-2"> DEBUG CONSOLE </vscode-tab-header>
        <vscode-tab-panel class="p-2">
          <div>DEBUG CONSOLE</div>
        </vscode-tab-panel>

        <vscode-tab-header slot="header" class="p-2"> PORTS </vscode-tab-header>
        <vscode-tab-panel class="p-2">
          <div>PORTS</div>
        </vscode-tab-panel>

        <vscode-tab-header slot="header" class="p-2"> TERMINAL </vscode-tab-header>
        <vscode-tab-panel class="p-2">
          <div>TERMINAL</div>
        </vscode-tab-panel>
      </vscode-tabs>
    </app-vscode>
  </div>
</template>
