import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  static const Color primary = Color(0xFF2563eb); // blue-600
  static const Color accent = Color(0xFF10b981); // emerald-500
  static const Color surface = Color(0xFFf8faff);
  static const Color textMain = Color(0xFF111827);
  static const Color textSecondary = Color(0xFF6B7280);

  static ThemeData get lightTheme {
    return ThemeData(
      primaryColor: primary,
      scaffoldBackgroundColor: surface,
      textTheme: GoogleFonts.interTextTheme(),
      colorScheme: ColorScheme.fromSeed(
        seedColor: primary,
        primary: primary,
        secondary: accent,
        surface: Colors.white,
      ),
      useMaterial3: true,
    );
  }
}
