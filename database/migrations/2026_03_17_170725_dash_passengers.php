<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("dash_passengers", function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('company_uuid');
            $table->string('name_surname')->nullable();
            $table->string('country_code', 5)->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->jsonb('social_media')->nullable();
            $table->jsonb('friendships')->nullable();
            $table->json('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("dash_passengers");
    }
};
